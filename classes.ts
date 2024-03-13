class Animal {
  private name: string;

  public constructor(theName: string) {
    this.name = theName;
  }

  public getName(): string {
    return this.name;
  }
}


class Plane {
  public constructor(private name: string) {}

  public getName(): string {
    return this.name;
  }
}


class Dog {
  private readonly name: string;
  public constructor(name: string) {
    this.name = name;
  }
}
