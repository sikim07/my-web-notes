export const CF_ERROR_CODES = {
    UNDECLARED_ERROR: {
        code: 9000,
        message: '미확인 에러',
    },
    ENV_UNDEFINED: {
        code: 9001,
        message: '환경변수 조회 불가',
    },
}

class Exception extends Error {
    status: { code: number; message: string }

    constructor(status = CF_ERROR_CODES.UNDECLARED_ERROR) {
        super()
        this.status = status
    }

    getResult() {
        return {
            code: this.status.code,
            message:
                Object.values(CF_ERROR_CODES).find((error) => error.code === this.status.code)
                    ?.message ?? '',
            stack: this.stack,
        }
    }
}

export default Exception
