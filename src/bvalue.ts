// `bvalue`에 `b`를 붙인 이유는 인자를 미리 부분적으로 `bind`해 둔 함수를 만들고 있음을 간결하게 표현한 것이다.
export default function bvalue(key: string) {
    return function (obj: any) {
        return obj[key];
    }
}
