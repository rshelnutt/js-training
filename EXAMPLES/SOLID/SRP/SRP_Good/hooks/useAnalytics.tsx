export const useAnalytics = () => {
  const trackEvent = (name: string, data: any) => {
    console.log(`Event tracked: ${name}`, data)
  }

  return { trackEvent }
}
