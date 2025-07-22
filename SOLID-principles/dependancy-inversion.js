/* 

    Dependency Inversion Principle
    High-level modules should not depend on low-level modules. Both should depend on abstractions.

*/

interface IMessageService {
  sendMessage(msg: string): void;
}

class EmailService implements IMessageService {
  sendMessage(msg: string) {
    console.log("Email:", msg);
  }
}

class Notification {
  constructor(private service: IMessageService) {}
  notifyUser() {
    this.service.sendMessage("Hello User!");
  }
}

