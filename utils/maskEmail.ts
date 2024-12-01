export default function maskEmail(email: string) {
  const [localPart, domain] = email.split("@")
  if (localPart.length <= 4) {
    // If the local part is too short, show first & last characters only
    const first = localPart[0] || ""
    const last = localPart.slice(-1) || ""
    return `${first}****${last}@${domain}`
  } else {
    const firstTwo = localPart.slice(0, 2)
    const lastTwo = localPart.slice(-2)
    const masked = "*".repeat(localPart.length - 4)
    return `${firstTwo}${masked}${lastTwo}@${domain}`
  }
}
