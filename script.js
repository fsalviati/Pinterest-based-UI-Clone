const grids = document.querySelectorAll('.grid');
const headings = document.querySelectorAll('.heading .wrapper .text');


//Enter Screen
function enterScreen(index) {
    const grid = grids[index]
    const heading = headings[index]
    const gridColumns = grid.querySelectorAll('.column')

    grid.classList.add('active')

    gridColumns.forEach(element => {
        element.classList.remove('animate_before', 'animate_after')
    })
    heading.classList.remove('animate_before', 'animate_after')
}


//Exit Screen
function exitScreen(index, exitDelay) {
    const grid = grids[index]
    const heading = headings[index]
    const gridColumns = grid.querySelectorAll('.column')

    gridColumns.forEach(element => {
        element.classList.add('animate_after')
    })

    heading.classList.add('animate_after')

    setTimeout(() => {
        grid.classList.remove('active')
    }, exitDelay)
}

//Animation Cycle
function setupAnimationCycle({ initialScreenIndex, timePerScreen, exitDelay }) {
    const cycleTime = timePerScreen + exitDelay;
    let nextIndex = 0;

    function nextCycle() {
        const currentIndex = nextIndex;

        enterScreen(currentIndex);

        setTimeout(() => exitScreen(currentIndex, exitDelay), timePerScreen)

        //4 screens to show
        nextIndex = nextIndex >= grids.length - 1 ? 0 : nextIndex + 1
    }


    setInterval(nextCycle, cycleTime);

    nextCycle();
}

setupAnimationCycle({
    initialScreenIndex: 0,
    timePerScreen: 2000, //ms
    exitDelay: 200 * 7 //ms
})