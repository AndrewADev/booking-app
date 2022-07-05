export function minutesInTheFuture(numberMinutes: number) {
    const now = new Date();
    
    return new Date(now.getTime() + numberMinutes * 60000)
}