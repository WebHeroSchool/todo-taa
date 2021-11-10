export const testLog = () => console.log('test message');

export const eventLog = () => console.log(event);

export const searchIndex = event => {
  console.log(
    Array.prototype.indexOf.call(
      event.target.parentElement.children, event.target));
};
