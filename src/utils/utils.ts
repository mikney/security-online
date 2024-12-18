import { format } from 'date-fns';
import { toDate } from 'date-fns-tz';
import { ru } from 'date-fns/locale';

export const formatDateWithTimeZone = (initialDate: string | Date, toFormat: string = 'dd.MM.yyyy HH:mm xxx') => {
    const date = new Date(initialDate);

    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const zonedDate = toDate(date, { timeZone });

    const formattedDate = format(zonedDate, toFormat);

    return formattedDate;
};

export function formatDuration(date1: string | Date, date2: string | Date): string {
    const seconds = (new Date(date1).getTime() - new Date(date2).getTime()) / 1000;
    const oneDayInSeconds = 86400; // 24 hours * 60 minutes * 60 seconds
    const oneHourInSeconds = 3600; // 60 minutes * 60 seconds

    if (seconds < oneDayInSeconds) {
        const hours = Math.floor(seconds / oneHourInSeconds);
        return `${hours} ${declineHours(hours)}`;
    }

    const days = Math.floor(seconds / oneDayInSeconds);
    return `${days} ${declineDays(days)}`;
}

function declineHours(hours: number): string {
    if (hours % 10 === 1 && hours % 100 !== 11) {
        return 'час';
    } else if (hours % 10 >= 2 && hours % 10 <= 4 && (hours % 100 < 10 || hours % 100 >= 20)) {
        return 'часа';
    } else {
        return 'часов';
    }
}

function declineDays(days: number): string {
    if (days % 10 === 1 && days % 100 !== 11) {
        return 'день';
    } else if (days % 10 >= 2 && days % 10 <= 4 && (days % 100 < 10 || days % 100 >= 20)) {
        return 'дня';
    } else {
        return 'дней';
    }
}

export function formattedNumber(number: number) {
    return number.toLocaleString('ru-RU');
}

export function formatDateAndTime(date: string | Date, toFormat: string = 'dd.MM.yyyy HH:mm') {
    return format(date, toFormat, { locale: ru });
}
