// function maqeBot(commands: string): [number, number, string] {
function maqeBot(commands) {
    var x = 0;
    var y = 0;
    var direction = 'N';
    var directions = ['N', 'E', 'S', 'W'];
    var movement = {
        'N': [0, 1],
        'E': [1, 0],
        'S': [0, -1],
        'W': [-1, 0]
    };
    var directionNames = {
        'N': 'North',
        'E': 'East',
        'S': 'South',
        'W': 'West'
    };
    var i = 0;
    while (i < commands.length) {
        var command = commands[i];
        if (command === 'R') {
            var currentIndex = directions.indexOf(direction);
            direction = directions[(currentIndex + 1) % 4];
            i++;
        }
        else if (command === 'L') {
            var currentIndex = directions.indexOf(direction);
            direction = directions[(currentIndex - 1 + 4) % 4];
            i++;
        }
        else if (command === 'W') {
            i++;
            var match = /(\d+)/.exec(commands.slice(i));
            var steps = match ? parseInt(match[0], 10) : 0;
            i += match ? match[0].length : 0;
            var _a = movement[direction], dx = _a[0], dy = _a[1];
            x += dx * steps;
            y += dy * steps;
        }
        else {
            i++;
        }
    }
    var fullDirection = directionNames[direction];
    // return [x, y, fullDirection];
    // console.log(`X: ${x} Y: ${y} Direction: ${fullDirection}`)
    return "X: ".concat(x, " Y: ").concat(y, " Direction: ").concat(fullDirection);
}
// Example usage
var commands = "RW15RW1";
// const [finalX, finalY, finalDirection] = maqeBot(commands);
// console.log(`X: ${finalX} Y: ${finalY} Direction: ${finalDirection}`);
console.log(maqeBot(commands));
