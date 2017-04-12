class Foo {
    private name: string;
    constructor(name: string) {
        this.name = name;
    }
    greet() {
        alert(`Hi there ${this.name}`);
    }
}

new Foo('Bertie').greet();