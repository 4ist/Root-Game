interface Faction {
    getDaylightActions(): string;

    doesRule(clearing: Clearing): boolean;
}