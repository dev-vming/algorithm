function solution(park, routes) {
    const [WIDTH, HEIGHT] = [park[0].length, park.length];
    let location = [];
    for (let i=0; i<HEIGHT; i++) {
        for (let j=0; j<WIDTH; j++) {
            if (park[i][j] === 'S') {
                location = [i, j];
                break;
            }
        }
    }

    for (const route of routes) {
        const [op, n] = route.split(" ");
        let [h, w] = location;
        let temp = []
        switch (op) {
            case "E":
                w += parseInt(n);
                if (w >= WIDTH) break;
                temp = park[h].slice(location[1], w+1);
                if (!temp.includes('X')) location = [h, w];
                break;
            case "W":
                w -= parseInt(n);
                if (w < 0) break;
                temp = park[h].slice(w, location[1]+1);
                if (!temp.includes('X')) location = [h, w];
                break;
            case "S":
                h += parseInt(n);
                if (h >= HEIGHT) break;
                for (let i=location[0]; i<=h; i++) {
                    temp.push(park[i][w]);
                }
                if (!temp.includes('X')) location = [h, w];
                break;
            case "N":
                h -= parseInt(n);
                if (h < 0) break;
                for (let i=h; i<=location[0]; i++) {
                    temp.push(park[i][w]);
                }
                if (!temp.includes('X')) location = [h, w];
                break;
            default:
                break;
        }
    }
    
    return location;
}