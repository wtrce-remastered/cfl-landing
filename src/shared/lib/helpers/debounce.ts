export const debounce = (callback: Function, delay: number) => {
    let timer: ReturnType<typeof setTimeout>

    return function (this: any, ...args: any[]) {
        const context = this
        clearTimeout(timer)
        timer = setTimeout(() => {
            callback.apply(context, args)
        }, delay)
    }
}
