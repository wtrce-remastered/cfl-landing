export const throttle = (callback: Function, limit: number) => {
    let inThrottle: boolean

    return function (this: any, ...args: any[]) {
        const context = this

        if (!inThrottle) {
            callback.apply(context, args)
            inThrottle = true
            setTimeout(() => (inThrottle = false), limit)
        }
    }
}
