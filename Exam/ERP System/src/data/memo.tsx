import { Memo } from "@/types/Memo";
import { users } from "@/data/users";


export const memos: Memo[] = [
    {
        id: 1,
        MemoTitle: "Reminder for Meeting",
        from: users[0].firstName + " " + users[0].lastName,
        to: users[1].firstName + " " + users[1].lastName,
        Status: "Pending"
    },
    {
        id: 2,
        MemoTitle: "Project Update",
        from: users[2].firstName + " " + users[2].lastName,
        to: users[3].firstName + " " + users[3].lastName,
        Status: "Approved"
    },
    {
        id: 3,
        MemoTitle: "Team Building Event",
        from: users[4].firstName + " " + users[4].lastName,
        to: users[5].firstName + " " + users[5].lastName,
        Status: "Rejected"
    },
    {
        id: 4,
        MemoTitle: "Task Assignment",
        from: users[0].firstName + " " + users[0].lastName,
        to: users[2].firstName + " " + users[2].lastName,
        Status: "Rejected"
    },
    {
        id: 5,
        MemoTitle: "Feedback Request",
        from: users[3].firstName + " " + users[3].lastName,
        to: users[4].firstName + " " + users[4].lastName,
        Status: "Approved"
    },
    {
        id: 6,
        MemoTitle: "Approval Needed",
        from: users[5].firstName + " " + users[5].lastName,
        to: users[1].firstName + " " + users[1].lastName,
        Status: "Pending"
    }
];
