package com.sapient.fsd.trade.utils;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

/**
 * Created by agu187 on 1/16/2018.
 */
public class DateTimeUtils {

    private static DateTimeFormatter DATE_TIME_FORMATTER  = DateTimeFormatter.ofPattern("dd-MM-uuuu");

    /**
     * Parses a date string in dd-mm-uuuu format to instance of LocalDateTime
     * @param dateStr - Date string
     * @return LocalDateTime instance
     * */
    public static LocalDateTime parseDate(String dateStr){
        return LocalDateTime.from(LocalDate.parse(dateStr,DATE_TIME_FORMATTER).atStartOfDay());

    }

    /**
     * Formats the date string
     * @param date
     * @return
     */
    public static String formatDate(LocalDateTime date){
        return DATE_TIME_FORMATTER.format(date);

    }

}
