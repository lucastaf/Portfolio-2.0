export function formatDateMonthYear(dateString: string | null): string | null {
    const date = dateString ? new Date(dateString) : null;
    const month = date
        ? new Intl.DateTimeFormat("pt-BR", {
            month: "long",
        }).format(date)
        : null;
    const formattedDate = date
        ? `${month}/${date.getFullYear()}`
        : null;

    return formattedDate;
}