import PageContent from "../components/PageContent";
import NewsLetterSignup from "../components/NewsLetterSignup";

function NewsLetterPage() {
    return (
        <PageContent title="Join our awesome newsletter!">
            <NewsLetterSignup />
        </PageContent>
    )
}

export default NewsLetterPage;

export async function action({ request }) {
    // const data = await request.formData();
    // const email = data.get("email");

    return { message: "Signup successful!" };
}
