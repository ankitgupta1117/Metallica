package com.sapient.fsd.trade.utils;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

/**
 * Created by agu187 on 1/16/2018.
 */
public class DateTimeUtils {

    private static DateTimeFormatter DATE_TIME_FORMATTER  = DateTimeFormatter.ofPattern("dd-MM-uuuu");
    public static LocalDateTime parseDate(String dateStr){
        return LocalDateTime.from(LocalDate.parse(dateStr,DATE_TIME_FORMATTER).atStartOfDay());

    }

    public static String formatDate(LocalDateTime date){
        return DATE_TIME_FORMATTER.format(date);

    }

    public static void main(String[] args) {
        System.out.println(LocalDate.parse("02-02-2018",DATE_TIME_FORMATTER));
        DateTimeUtils.parseDate("02-02-2018");
    }
}
