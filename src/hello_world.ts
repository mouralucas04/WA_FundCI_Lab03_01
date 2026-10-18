const greeting = 'world';

export function hello(world: string = greeting): string {
    if (world === "WebAcademy") {
        return "Hello WebAcademy!";
    }
    return `Hello ${world}!`;
}