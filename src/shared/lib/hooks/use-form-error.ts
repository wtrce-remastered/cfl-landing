import { useMemo } from "react"
import { FieldErrors } from "react-hook-form"

const getErrorMessage = (strings: string[], structure: any): string => {
    if (strings.length > 1) return getErrorMessage(strings.slice(1), structure && structure[strings[0]])
    return structure && structure[strings[0]]?.message
}

export const useFormError = (name: string, formErrors: FieldErrors) => {
    const formNameError = formErrors[name] ?? formErrors[name.split(".")[0]]
    return useMemo(() => formNameError?.message?.toString() ?? getErrorMessage(name.split("."), formErrors), [formErrors, formNameError, name])
}
