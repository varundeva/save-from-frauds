export const isQueryValid = (inputString: string): boolean => {
  // Regular Expression for URLs
  const urlPattern =
    /^(https?:\/\/|www\.)[a-zA-Z0-9-]+\.[a-zA-Z]{2,6}(\.[a-zA-Z]{2,6})?(\/[a-zA-Z0-9\-._~:/?#[\]@!$&'()*+,;=]*)?$/

  // Regular Expression for Phone Numbers
  const phonePattern = /^(\+?[1-9]\d{0,3})?[\s-]?(\(?\d{1,4}\)?[\s-]?)?(\d{1,4}[-\s]?\d{1,4}[-\s]?\d{1,4})$/

  // Regular Expression for Email Addresses
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

  // Check if it matches a website URL
  if (urlPattern.test(inputString)) {
    return true
  }

  // Check if it matches a phone number
  if (phonePattern.test(inputString)) {
    return true
  }

  // Check if it matches an email address
  if (emailPattern.test(inputString)) {
    return true
  }

  // If no pattern matches, return false
  return false
}
