class Foo {
    private name: string;
    constructor(name: string) {
        this.name = name;
    }
    greet() {
        alert(`Hi ${this.name}`);
    }
}

new Foo('Bert').greet();