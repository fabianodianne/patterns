function pinetree(n) {
    for(let i = 1; i < n; i++) {
        console.log(" ".repeat(n - i) + "*".repeat(i * 2 - 1));
    }
}

pinetree(8);