const ObjectName = object('ObjectID');
update(() => {
  // use 1/2 the width and height to center the object  
  ObjectName.x = pointerX() - ObjectName.width / 2;
  ObjectName.y = pointerY() - ObjectName.height / 2;
});