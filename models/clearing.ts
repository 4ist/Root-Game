
class Clearing {
    
    

    suit: string;
    ruler: Faction;

    adjacentClearings: Clearing[];


    battle(attacker: Faction, defender: Faction){
        //roll dice or something
    }

    move(mover: Faction, targetClearing: Clearing) {
        //establish if legal move (check for rule), if not throw exception? check game rules elsewhere; just allow actions on models
    }

    containsEmptyBuildingSlot(): boolean {
        return true;
    }


}