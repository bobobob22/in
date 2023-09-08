export const formatPhoneNumber = (phoneNumber: string) => {
    return `+48 ${phoneNumber.split("-").join(" ")}`
}