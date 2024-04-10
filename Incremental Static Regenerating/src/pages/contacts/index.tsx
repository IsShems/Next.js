import { CustomDiv } from "@/components/CustomDiv";
import { inter } from "@/fonts";
import { Contact } from "@/types/Contact";

interface Props {
    contacts: Contact[]
}

export default function Contacts({ contacts }: Props) {
    return (
        <CustomDiv className={inter.className}>
            {contacts.map((contact) => (
                <CustomDiv key={contact.id}>
                    <br/>
                    <p>Email: {contact.email}</p>
                    <p>Phone: {contact.phone}</p>
                    <p>Address: {contact.address}</p>
                    <br/>
                    <hr className="solid"/>
                </CustomDiv>
            ))}
        </CustomDiv>
    )
}

export async function getStaticProps() {
    const response = await fetch("http://localhost:3000/contacts")
    let contacts = await response.json()

    return {
        props:
        {
            contacts
        },
        revalidate: 5
    }

}