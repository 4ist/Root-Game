import { booleanLiteralTypeAnnotation } from "@babel/types";

export class MarquiseDeCat implements Faction {
    
    pieces = {
        "warriors": 20,
        "wood": 8,
        "sawmills": 6,
        "workshops": 6,
        "recruiters": 6
    }


    getDaylightActions(): string {
        return "exampleAction";
        //throw new Error("Method not implemented.");
    }

    doDaylightAction(){
        //some kind of selection logic, starting with a switch (refactor later)
        let choice: number = 1; //TODO get user input
        switch (choice) {
            case 1:
                this.battle();
                break;
            case 2:
                this.march();
                break;
            case 3:
                this.recruit()
                break;
            case 4:
                this.build();
                break;
            case 5:
                this.overwork();
                break;
        
            default:
                break;
        }
    }

    doesRule(clearing: Clearing): boolean {
        throw new Error("Method not implemented.");
    }

    battle() {
        let clearing: Clearing; //TODO get user input
                let targetFaction: Faction;
                clearing.battle(this, targetFaction)
    }

    march(){
        let clearing: Clearing; //TODO get user input
        let targetClearing: Clearing; //TODO get user input

        let rule: boolean = true;
        if (rule){
            clearing.move(this, targetClearing)
        }
    }

    recruit(){
        //find clearings w/ recruiters
        //place warrior for each recruiter
    }

    build(){
        let clearing: Clearing; //TODO get user input

        if (this.doesRule(clearing)){
            if (clearing.containsEmptyBuildingSlot()){

            }
        }
    }

    overwork(){

    }








}