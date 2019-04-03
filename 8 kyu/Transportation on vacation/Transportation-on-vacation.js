function rentalCarCost(day) {
    const rent = 40;
    if (day >= 7) return (day * rent - 50);
    if (day >= 3) return (day * rent - 20);
    return day * rent;
}