type Direction = 'N' | 'E' | 'S' | 'W';

function maqeBot(commands: string): string {

    let x = 0;
    let y = 0;
    let direction: Direction = 'N';

    const directions: Direction[] = ['N', 'E', 'S', 'W'];
    const movement: { [key in Direction]: [number, number] } = {
        'N': [0, 1],
        'E': [1, 0],
        'S': [0, -1],
        'W': [-1, 0]
    };

    const directionNames: { [key in Direction]: string } = {
        'N': 'North',
        'E': 'East',
        'S': 'South',
        'W': 'West'
    };

    let i = 0;
    while (i < commands.length) {
        const command = commands[i];
        if (command === 'R') {
            const currentIndex = directions.indexOf(direction);
            direction = directions[(currentIndex + 1) % 4];
            i++;
        } else if (command === 'L') {
            const currentIndex = directions.indexOf(direction);
            direction = directions[(currentIndex - 1 + 4) % 4];
            i++;
        } else if (command === 'W') {
            i++;
            const match = /(\d+)/.exec(commands.slice(i));
            const steps = match ? parseInt(match[0], 10) : 0;
            i += match ? match[0].length : 0;
            const [dx, dy] = movement[direction];
            x += dx * steps;
            y += dy * steps;
        } else {
            i++;
        }
    }

    const fullDirection = directionNames[direction];

    return `X: ${x} Y: ${y} Direction: ${fullDirection}`

}

const commands = "RW15RW1";
console.log(maqeBot(commands))
