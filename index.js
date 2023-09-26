/* 
    Program to control an elevator. 
    - Building with Ground Floor, 15 floors and 5 floors under ground. 
    - The top floor is a Penthouse, which requires a key to access.
    - The elevator should remain in the last floor it was used.
    - The starting position of the elevator for the sake of testing the program will be at Ground Floor. 
*/

const floors = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16];
let elevatorFloor = 0;
let currentFloor;

let keyInput = false;
let openDoor = false;
let elevatorMoving = false;

let maxWeight = 450;

function doorsOpening(floor) {
    if (elevatorMoving == false) {
        switch (floor) {
            case 0:
                console.log("Bell... Ground Floor.");
                console.log("Doors opening.");
                openDoor = true;
            break;

            case 16:
                console.log("Bell... Penthouse.");
                console.log("Doors opening.");
                openDoor = true;
            break;

            default:
                console.log(`Bell... Floor ${floor}.`)
                console.log("Doors opening.")
                openDoor = true;
            break;
        }
    }
};

function callElevator(floor) {
    currentFloor = floors[floor + 5];
    console.log(`El piso actual es ${currentFloor}`);

    if (elevatorFloor == currentFloor) {
        doorsOpening(currentFloor);

    } else if (currentFloor < elevatorFloor) {
        elevatorMoving = true;

        for (let i = elevatorFloor; i > currentFloor; i--) {
            console.log(i);
        };

        elevatorFloor = currentFloor;
        elevatorMoving = false;
        doorsOpening(currentFloor);

    } else if (currentFloor > elevatorFloor) {
        elevatorMoving = true;

        for (let i = elevatorFloor; i < currentFloor; i++) {
            console.log(i);
        };

        elevatorFloor = currentFloor;
        elevatorMoving = false;
        doorsOpening(currentFloor);
    }
};

function elevatorUp (floor, weight) {    
    if (weight > maxWeight) {
        let excessWeight =  weight - maxWeight;
        return(
            console.log(`Warning, max weight exceeded by ${excessWeight} Kgs.`)
        );
    };
    
    if (floor == 16 && keyInput == false) {
        return(
            console.log("Please use your key to access the Penthouse.")
        );
    }

    console.log (`Moving up to floor ${floor}.`);

    if (openDoor == true) {
        console.log("Doors closing");
        openDoor = false;
    };

    elevatorMoving = true;

    for (let i = currentFloor; i < floor; i++) {
        if (i == 13) {
            i += 1;
        }
        console.log(`Bell... ${i}`);
    };

    currentFloor = floor;
    elevatorFloor = currentFloor;
    elevatorMoving = false;
    doorsOpening(currentFloor);
};

function elevatorDown (floor, weight) {
    if (weight > maxWeight) {
        let excessWeight = weight - maxWeight;
        return(
            console.log(`Warning, max weight exceeded by ${excessWeight} Kgs.`)
        );
    };

    console.log(`Moving down to floor ${floor}`);

    if (openDoor == true) {
        console.log("Doors closing");
        openDoor = false;
    };

    elevatorMoving = true;

    for (let i = currentFloor; i > floor; i--) {
        console.log(`Bell... ${i}`);
    };

    currentFloor = floor;
    elevatorFloor = currentFloor;
    elevatorMoving = false;
    doorsOpening(currentFloor);
};

callElevator(13)