// import dependencies
import React from "react";

// import API mocking utilities from Mock Service Worker
import { rest } from "msw";
import { setupServer } from "msw/node";

// import react-testing methods
import {
  render,
  screen,
  waitForElementToBeRemoved,
  fireEvent,
  getByText,
  getByRole,
  getAllByRole,
  within,
} from "@testing-library/react";

// add custom jest matchers from jest-dom
import "@testing-library/jest-dom/extend-expect";
// the component to test
import Users from "../Users";

const users = [
  {
    id: "1",
    name: "Aaron Miles",
    email: "aaron@mailinator.com",
    role: "member",
  },
  {
    id: "2",
    name: "Aishwarya Naik",
    email: "aishwarya@mailinator.com",
    role: "member",
  },
  {
    id: "3",
    name: "Arvind Kumar",
    email: "arvind@mailinator.com",
    role: "admin",
  },
  {
    id: "4",
    name: "Caterina Binotto",
    email: "caterina@mailinator.com",
    role: "member",
  },
  {
    id: "5",
    name: "Chetan Kumar",
    email: "chetan@mailinator.com",
    role: "member",
  },
  {
    id: "6",
    name: "Jim McClain",
    email: "jim@mailinator.com",
    role: "member",
  },
  {
    id: "7",
    name: "Mahaveer Singh",
    email: "mahaveer@mailinator.com",
    role: "member",
  },
  {
    id: "8",
    name: "Rahul Jain",
    email: "rahul@mailinator.com",
    role: "admin",
  },
  {
    id: "9",
    name: "Rizan Khan",
    email: "rizan@mailinator.com",
    role: "member",
  },
  {
    id: "10",
    name: "Sarah Potter",
    email: "sarah@mailinator.com",
    role: "admin",
  },
  {
    id: "11",
    name: "Keshav Muddaiah",
    email: "keshav@mailinator.com",
    role: "member",
  },
  {
    id: "12",
    name: "Nita Ramesh",
    email: "nita@mailinator.com",
    role: "member",
  },
  {
    id: "13",
    name: "Julia Hunstman",
    email: "julia@mailinator.com",
    role: "member",
  },
  {
    id: "14",
    name: "Juan Alonso",
    email: "juan@mailinator.com",
    role: "admin",
  },
  {
    id: "15",
    name: "Gabriel Montoya",
    email: "gabriel@mailinator.com",
    role: "admin",
  },
  {
    id: "16",
    name: "Beatrice Iglesias",
    email: "beatrice@mailinator.com",
    role: "admin",
  },
  {
    id: "17",
    name: "Sarah Symms",
    email: "sarah.s@mailinator.com",
    role: "admin",
  },
  {
    id: "18",
    name: "Patrick Pinheiro",
    email: "patrick@mailinator.com",
    role: "admin",
  },
  {
    id: "19",
    name: "Anand Patel",
    email: "anand@mailinator.com",
    role: "member",
  },
  {
    id: "20",
    name: "Kishore Kalburgi",
    email: "kishore@mailinator.com",
    role: "member",
  },
  {
    id: "21",
    name: "Rebecca Norris",
    email: "rebecca@mailinator.com",
    role: "member",
  },
  {
    id: "22",
    name: "Özgür Başak",
    email: "ozgur@mailinator.com",
    role: "member",
  },
  {
    id: "23",
    name: "Robin Andersen",
    email: "robin@mailinator.com",
    role: "member",
  },
  {
    id: "24",
    name: "Nandini Kumar",
    email: "nandini@mailinator.com",
    role: "member",
  },
  {
    id: "25",
    name: "Nikita Smith",
    email: "nikita@mailinator.com",
    role: "member",
  },
  {
    id: "26",
    name: "Colton Doe",
    email: "colton@mailinator.com",
    role: "member",
  },
  {
    id: "27",
    name: "Alain Senna",
    email: "alain@mailinator.com",
    role: "member",
  },
  {
    id: "28",
    name: "Ashwin Jain",
    email: "ashwin@mailinator.com",
    role: "member",
  },
  {
    id: "29",
    name: "Seema Bhatt",
    email: "seema@mailinator.com",
    role: "member",
  },
  {
    id: "30",
    name: "Kayla Scarpinski",
    email: "kayla@mailinator.com",
    role: "member",
  },
  {
    id: "31",
    name: "Ajay Ghosh",
    email: "ajay@mailinator.com",
    role: "member",
  },
  {
    id: "32",
    name: "Chris Lindberg",
    email: "chris@mailinator.com",
    role: "member",
  },
  {
    id: "33",
    name: "Christina Mourujärvi",
    email: "christina@mailinator.com",
    role: "member",
  },
  {
    id: "34",
    name: "Mikhail Bill",
    email: "mikhail@mailinator.com",
    role: "member",
  },
  {
    id: "35",
    name: "Eino Göregen",
    email: "eino@mailinator.com",
    role: "member",
  },
  {
    id: "36",
    name: "Zachariah Johansson",
    email: "zacharaiah@mailinator.com",
    role: "member",
  },
  {
    id: "37",
    name: "Aimaan Mohammed",
    email: "aimaan@mailinator.com",
    role: "admin",
  },
  {
    id: "38",
    name: "Aika Tsunoda",
    email: "aika@mailinator.com",
    role: "member",
  },
  {
    id: "39",
    name: "Kimiko Minamoto",
    email: "kimiko@mailinator.com",
    role: "member",
  },
  {
    id: "40",
    name: "Alyona Baginskaite",
    email: "alyona@mailinator.com",
    role: "member",
  },
  {
    id: "41",
    name: "Anirudh Mukherjee",
    email: "anirudh@mailinator.com",
    role: "member",
  },
  {
    id: "42",
    name: "Alyona Gov",
    email: "alyonagov@mailinator.com",
    role: "member",
  },
  {
    id: "43",
    name: "Robin Singh",
    email: "robin@mailinator.com",
    role: "member",
  },
  {
    id: "44",
    name: "Vijay Vasudevan",
    email: "vijayv@mailinator.com",
    role: "member",
  },
  {
    id: "45",
    name: "Steve Smith",
    email: "steve@mailinator.com",
    role: "member",
  },
  {
    id: "46",
    name: "Anirudh Banerjee",
    email: "anirudhb@mailinator.com",
    role: "member",
  },
];

const server = setupServer(
  rest.get(
    "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json",
    (req, res, ctx) => {
      return res(ctx.json(users));
    }
  )
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("loads and displays table", async () => {
  render(<Users />);
  await waitForElementToBeRemoved(() =>
    screen.getAllByTestId("skeleton-element")
  );
  users.slice(0, 5).forEach((user) => {
    expect(screen.getByText(user.name)).toBeInTheDocument();
    expect(screen.getByText(user.email)).toBeInTheDocument();
  });
});

describe("Pagination", () => {
  test("loads on first page initially", async () => {
    render(<Users />);
    await waitForElementToBeRemoved(() =>
      screen.getAllByTestId("skeleton-element")
    );

    const navLink = screen.getByText("First");
    expect(navLink).toHaveAttribute("disabled");
    const pageText = screen.getByText("Showing 1 to 5 of 46 entries");
    expect(pageText).toBeInTheDocument();
  });

  test("goes to the last page", async () => {
    render(<Users />);
    await waitForElementToBeRemoved(() =>
      screen.getAllByTestId("skeleton-element")
    );

    fireEvent(
      screen.getByText("Last"),
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );
    const navLink = screen.getByText("Last");
    expect(navLink).toHaveAttribute("disabled");
    expect(screen.getByText(users[users.length - 1].name)).toBeInTheDocument();
  });
});

//done
describe("Rows per page", () => {
  test("renders the select successfully", async () => {
    render(<Users />);
    await waitForElementToBeRemoved(() =>
      screen.getAllByTestId("skeleton-element")
    );
    const select = screen.getByTestId("rowsPerPage");
    expect(getByText(select, "5")).toBeInTheDocument();
    expect(getByText(select, "10")).toBeInTheDocument();
    expect(getByText(select, "25")).toBeInTheDocument();
  });

  test("renders the options successfully", async () => {
    render(<Users />);
    await waitForElementToBeRemoved(() =>
      screen.getAllByTestId("skeleton-element")
    );
    const controlElement = screen.getByTestId("rowsPerPage");
    fireEvent.click(controlElement);

    const options = screen.getAllByRole("option");
    expect(options).toHaveLength(3);
  });

  test("change rows per page", async () => {
    render(<Users />);
    await waitForElementToBeRemoved(() =>
      screen.getAllByTestId("skeleton-element")
    );
    const controlElement = screen.getByTestId("rowsPerPage");
    fireEvent.click(controlElement);

    fireEvent.click(getByText(controlElement, "25"));
    expect(controlElement).toHaveTextContent("25");
  });
});

describe("Searchbar", () => {
  test("should render", async () => {
    render(<Users />);
    await waitForElementToBeRemoved(() =>
      screen.getAllByTestId("skeleton-element")
    );
    expect(screen.getByTestId("searchInput")).toBeInTheDocument();
  });

  it("should change value on input change", async () => {
    render(<Users />);
    await waitForElementToBeRemoved(() =>
      screen.getAllByTestId("skeleton-element")
    );

    const searchInput = screen.getByRole("search");

    fireEvent.change(searchInput, {
      target: { value: "test" },
    });

    expect(searchInput.value).toBe("test");
  });
});

describe("Select and Delete", () => {
  test("should render", async () => {
    render(<Users />);
    await waitForElementToBeRemoved(() =>
      screen.getAllByTestId("skeleton-element")
    );
    expect(screen.getAllByRole("checkbox")).toHaveLength(6);
  });
});
