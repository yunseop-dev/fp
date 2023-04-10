async function handler(event, { Backend, params }) {
    const { id } = params
    if (!id) return new HTTPResponse(400, "id 를 찾을 수 없습니다")

    const r = await Backend.GET(`/settlements/${id}`)
    if (r.status !== 200) return new HTTPResponse(r.status, r.data.message)

    const {
        // not null
        settlementId,
        partnerId,
        partnerName,
        yearMonth, // 정산월
        approvalStatus, // 정산 상태
        totalAmount, // 순매출 합
        settlementAmount, // 정산금

        // nullable
        sales: salesOfSalesContracts, // 판매계약 매출
        operations: salesOfOperationContracts, // 운영계약 매출
        region, // 지역 매출
        extraFee, // 고정비용
        rejectReason // 반려 사유
    } = r.data

    // getProperty + reduce
    const reduceForSum = (array = []) => (property) => array.reduce((prev, cur) => {
        if (!cur[property]) return prev + 0
        return prev + cur[property]
    }, 0)

    salesOfSalesContracts.map((contract, i, array) => ({
        contracts: array,
        vehicleCount: contract.vehicleCount,
        totalAmount: contract.totalAmount,
        commission: contract.commission,
        consignmentCommission: contract.consignmentCommission,
        regionCommission: contract.regionCommission,
        netAmount: contract.netAmount,
    })).reduce((prev, cur) => ({
        // ...
    }), {
        vehicleCount: 0,
        totalAmount: 0,
        commission: 0,
        consignmentCommission: 0,
        regionCommission: 0,
        netAmount: 0
    })

    const sales = {
        contracts: salesOfSalesContracts ?? [],
        vehicleCount: reduceForSum(salesOfSalesContracts)('vehicleCount'),
        totalAmount: reduceForSum(salesOfSalesContracts)('totalAmount'),
        commission: reduceForSum(salesOfSalesContracts)('commission'),
        consignmentCommission: reduceForSum(salesOfSalesContracts)('consignmentCommission'),
        regionCommission: reduceForSum(salesOfSalesContracts)('regionCommission'),
        netAmount: reduceForSum(salesOfSalesContracts)('netAmount'),
    }
    const operation = {
        contracts: salesOfOperationContracts ?? [],
        vehicleCount: reduceForSum(salesOfOperationContracts)('vehicleCount'),
        totalAmount: reduceForSum(salesOfOperationContracts)('totalAmount'),
        commission: reduceForSum(salesOfOperationContracts)('commission'),
        netAmount: reduceForSum(salesOfOperationContracts)('netAmount'),
    }

    return {
        settlementId: settlementId ?? 0,
        partnerId: partnerId ?? '',
        partnerName: partnerName ?? '',
        yearMonth: yearMonth ?? 202301,
        approvalStatus: approvalStatus ?? 'COMPLETE',
        sales,
        operation,
        region: {
            totalAmount: region?.totalAmount ?? 0,
            commissionRatio: region?.commissionRatio ?? 0,
            commission: region?.commission ?? 0,
            netAmount: region?.netAmount ?? 0,
        },
        extraFee: {
            // not null
            installmentFee: extraFee?.installmentFee ?? 0,
            communicationPerUnit: extraFee?.communicationPerUnit ?? 0,
            communicationFee: extraFee?.communicationFee ?? 0,
            communicationVehicleCount: extraFee?.communicationVehicleCount ?? 0,
            insurancePerUnit: extraFee?.insurancePerUnit ?? 0,
            insuranceVehicleCount: extraFee?.insuranceVehicleCount ?? 0,
            insuranceFee: extraFee?.insuranceFee ?? 0,
            transportFee: extraFee?.transportFee ?? 0,
            repairFee: extraFee?.repairFee ?? 0,
            additionalFee: extraFee?.additionalFee ?? 0,
            extraTotalFee: extraFee?.extraTotalFee ?? 0,

            // nullable
            installmentReason: extraFee?.installmentReason ?? null,
            communicationReason: extraFee?.communicationReason ?? null,
            insuranceReason: extraFee?.insuranceReason ?? null,
            transportReason: extraFee?.transportReason ?? null,
            additionalReason: extraFee?.additionalReason ?? null,
            repairReason: extraFee?.repairReason ?? null,
        },
        rejectReason: rejectReason ?? null,
        netTotalAmount: totalAmount ?? 0,
        settlementAmount: settlementAmount ?? 0,
    }
}