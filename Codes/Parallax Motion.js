const ObjectName = object('ObjectID');
update(() => {
  ObjectName.x = 200 + pointerX() * .25;
});