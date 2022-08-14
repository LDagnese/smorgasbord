const { format_expensive, cloudinary_url } = require("../utils/helpers");

test("format_expensive() returns the number of $$'s that are represnted in Restaurant model", () => {
  const expense1 = format_expensive(1);
  const expense3 = format_expensive(3);

  expect(expense1).toBe("$");
  expect(expense3).toBe("$$$");
});

test("cloudinary_url() returns the cloudinary url from the publicID and transforms based on passed width and height", () => {
  const url = cloudinary_url(100, 300, "smorgasbord/Smorgasbord_z5pwyq");
  const url2 = cloudinary_url(200, 200);
  const url3 = cloudinary_url(100, 100, "bad_folder/bad_id")

  expect(url).toBe(
    "http://res.cloudinary.com/du44htqe7/image/upload/c_pad,f_auto,g_center,h_100,q_auto,w_300/d_smorgasbord:Smorgasbord_z5pwyq.png/v1/smorgasbord/Smorgasbord_z5pwyq"
  );
  expect(url2).toBe(
    "http://res.cloudinary.com/du44htqe7/image/upload/c_pad,f_auto,g_center,h_200,q_auto,w_200/d_smorgasbord:Smorgasbord_z5pwyq.png/v1/smorgasbord/Smorgasbord_z5pwyq"
  );
  expect(url3).toBe(
    "http://res.cloudinary.com/du44htqe7/image/upload/c_pad,f_auto,g_center,h_100,q_auto,w_100/d_smorgasbord:Smorgasbord_z5pwyq.png/v1/bad_folder/bad_id"
  );
});
