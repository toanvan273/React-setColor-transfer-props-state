 /* Comvert solar date dd/mm/yyyy to the corresponding lunar date */
 convertSolar2Lunar(dd, mm, yy, timeZone) {
    var k, dayNumber, monthStart, a11, b11, lunarDay, lunarMonth, lunarYear, lunarLeap;
    dayNumber = this.jdFromDate(dd, mm, yy);
    k = this.INT((dayNumber - 2415021.076998695) / 29.530588853);
    monthStart = this.getNewMoonDay(k+1, timeZone);
    if (monthStart > dayNumber) {
        monthStart = this.getNewMoonDay(k, timeZone);
    }
    //alert(dayNumber+" -> "+monthStart);
    a11 = this.getLunarMonth11(yy, timeZone);
    b11 = a11;
    if (a11 >= monthStart) {
        lunarYear = yy;
        a11 = this.getLunarMonth11(yy-1, timeZone);
    } else {
        lunarYear = yy+1;
        b11 = this.getLunarMonth11(yy+1, timeZone);
    }
    lunarDay = dayNumber-monthStart+1;
    let diff = this.INT((monthStart - a11)/29);
    lunarLeap = 0;
    lunarMonth = diff+11;
    if (b11 - a11 > 365) {
        let leapMonthDiff = this.getLeapMonthOffset(a11, timeZone);
        if (diff >= leapMonthDiff) {
            lunarMonth = diff + 10;
            if (diff == leapMonthDiff) {
                lunarLeap = 1;
            }
        }
    }
    if (lunarMonth > 12) {
        lunarMonth = lunarMonth - 12;
    }
    if (lunarMonth >= 11 && diff < 4) {
        lunarYear -= 1;
    }
    return new Array(lunarDay, lunarMonth, lunarYear, lunarLeap);
}
