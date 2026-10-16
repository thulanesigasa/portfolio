export type ProjectBenefits = {
  audience: string;
  strengths: { title: string; description: string }[];
  example: string;
};

export const projectBenefits: Record<string, ProjectBenefits> = {
  "bible-diaries": {
    audience:
      "Built for people who want to reflect on scripture, record their spiritual journey and share encouragement with a faith community. It brings personal expression and community discovery into a focused space.",
    strengths: [
      {
        title: "Make reflection a habit",
        description:
          "A dedicated place for diary entries gives people a way to put their thoughts into words and return to the themes that matter to them.",
      },
      {
        title: "Find relevant encouragement",
        description:
          "Themed reflections make it easier to explore topics such as faith, hope and gratitude when looking for something specific to read.",
      },
      {
        title: "Build connections through shared experiences",
        description:
          "Profiles and conversations let people move beyond reading a post and engage with the person behind it.",
      },
    ],
    example:
      "Someone reflecting on gratitude can write an entry, explore other reflections on the same theme and start a conversation with another community member. The experience connects a personal practice with shared encouragement.",
  },
  "service-link": {
    audience:
      "Designed for people looking for local professional help and providers who need a clearer way to present their services. Discovery and provider information sit together so that choosing who to contact takes fewer separate steps.",
    strengths: [
      {
        title: "Narrow the search",
        description:
          "Category, distance and name filters help people focus on providers relevant to the job instead of browsing an undifferentiated directory.",
      },
      {
        title: "Compare before making contact",
        description:
          "Provider profiles bring service details, pricing information, experience and reviews into one place to support a more informed choice.",
      },
      {
        title: "Turn discovery into a next step",
        description:
          "Booking flows help people move from finding a professional to coordinating a service without rebuilding the search elsewhere.",
      },
    ],
    example:
      "A homeowner looking for an electrician can filter nearby providers, review their profiles and begin a booking. A provider benefits from having a structured place to explain their offering to someone already searching for that service.",
  },
  medsync: {
    audience:
      "Designed around medical staff who need clear appointment information and predictable navigation. The interface focuses on the administrative steps surrounding care, from accessing the dashboard to confirming a booking.",
    strengths: [
      {
        title: "Make the next action clear",
        description:
          "A consistent screen structure helps staff recognise where to go for appointment tasks without learning a different layout at each step.",
      },
      {
        title: "Keep booking steps connected",
        description:
          "The booking and confirmation interfaces form a single journey, helping staff follow an appointment through to its confirmation screen.",
      },
      {
        title: "Support work across mobile devices",
        description:
          "The React Native and Expo foundation supports a shared mobile interface, with API boundaries connecting it to the wider appointment system.",
      },
    ],
    example:
      "A staff member can enter the application, use the dashboard to reach the booking flow and review a confirmation after scheduling. The design gives the administrative journey a clear beginning, middle and end.",
  },
  "resume-build": {
    audience:
      "Created for job seekers who need to present their experience clearly without spending most of their time adjusting document formatting. It is useful when turning scattered career information into a coherent résumé.",
    strengths: [
      {
        title: "Start with manageable sections",
        description:
          "Guided fields break a large writing task into experience, education and skills, helping people see what information they still need to add.",
      },
      {
        title: "See the document take shape",
        description:
          "Interactive previews connect editing with presentation, making it easier to judge the structure of a résumé while working on its content.",
      },
      {
        title: "Prepare a document to share",
        description:
          "PDF generation gives applicants a practical output for applications, without having to manually recreate the layout in a separate tool.",
      },
    ],
    example:
      "A first-time applicant can add their education and skills, build out relevant experience and review the result before exporting a PDF. Someone updating an existing résumé can focus on new information while keeping the document structured.",
  },
  "rhyma-music": {
    audience:
      "Built for an artist who needs a central online presence and listeners who want an accessible way to explore their work. Music discovery and professional enquiries share one destination.",
    strengths: [
      {
        title: "Bring the artist’s work together",
        description:
          "Tracks, discography and release information give visitors a place to explore the catalogue rather than piecing it together across unrelated pages.",
      },
      {
        title: "Give enquiries a clear route",
        description:
          "A booking form helps event organisers express interest through a structured channel and gives the artist a more organised enquiry workflow.",
      },
      {
        title: "Make content easier to maintain",
        description:
          "Administration tools and Spotify release synchronisation support keeping the artist’s catalogue and website content up to date.",
      },
    ],
    example:
      "A listener discovering Rhyma can explore releases and get a sense of the artist’s work. An event organiser visiting the same site can move from listening to sending a booking enquiry.",
  },
  "ndivhu-mpho": {
    audience:
      "Created for a couple managing wedding responses and guests who need a straightforward way to reserve their place. It replaces a fragmented invitation process with a dedicated event experience.",
    strengths: [
      {
        title: "Give guests a clear response path",
        description:
          "Online RSVPs let guests submit their response directly, while the seating interface makes seat selection part of the same journey.",
      },
      {
        title: "Keep reservations organised",
        description:
          "Pending, confirmed and declined statuses help the couple review responses and distinguish requests from final confirmations.",
      },
      {
        title: "Connect decisions with communication",
        description:
          "Confirmation emails and reservation controls support following through on guest decisions while keeping the administrative record aligned.",
      },
    ],
    example:
      "A guest can submit a reservation and choose an available seat. The couple can review the request, accept or decline it and send a confirmation, keeping the guest journey connected to the planning workflow.",
  },
  geni: {
    audience:
      "Designed for learners, educators and teams exploring gender equality in technology. GENI brings introductory material and interactive learning tools together so people can engage with digital inclusion at their own pace.",
    strengths: [
      {
        title: "Make a complex topic approachable",
        description:
          "Articles and learning resources give people a starting point for understanding digital inclusion before exploring more specific questions.",
      },
      {
        title: "Move from reading to reflection",
        description:
          "Quizzes and assessments encourage learners to examine what they understand and consider how inclusive practices apply in their own environment.",
      },
      {
        title: "Explore questions as they arise",
        description:
          "The chat assistant provides a conversational way to explore gender equality topics alongside the resource collection.",
      },
    ],
    example:
      "An educator could introduce a digital inclusion topic through a resource, invite learners to try a quiz and use the resulting questions as the basis for discussion. A team could use an assessment to start a conversation about its own digital practices.",
  },
  "ghost-file-shuttler": {
    audience:
      "Built for people who regularly move documents and other files between a computer and an Android phone. It provides a dedicated transfer workflow instead of requiring a different workaround for every device.",
    strengths: [
      {
        title: "Bridge desktop and mobile",
        description:
          "A browser interface on the computer and a native Android application give each device a practical place to upload, find and download files.",
      },
      {
        title: "Choose a transfer mode for the situation",
        description:
          "Cloud and local network workflows give users options depending on where their devices are and how they are connected.",
      },
      {
        title: "Keep the hand-off straightforward",
        description:
          "Shared vault pairing and an archive view bring device connection and file discovery into a focused transfer experience.",
      },
    ],
    example:
      "A student preparing a document on a laptop can upload it through the browser and retrieve it on an Android phone. Someone working within a local network can use that transfer mode as part of the same device-to-device workflow.",
  },
  "rulership-erp": {
    audience:
      "Designed for the people handling stock, checkout and administration in a detergent manufacturing business. It connects daily sales activity with the information managers need to understand operations.",
    strengths: [
      {
        title: "Bring stock and sales into one workflow",
        description:
          "Inventory management, restocking and sales reports provide a shared structure for activities that might otherwise be tracked in separate documents.",
      },
      {
        title: "Reduce repeated product entry",
        description:
          "Barcode scanning helps staff identify products during mobile checkout, supporting a more direct route from selecting an item to recording the sale.",
      },
      {
        title: "Make sales records easier to follow",
        description:
          "VAT calculations and receipt preparation give each transaction a consistent structure, helping staff review the amounts and records associated with a sale.",
      },
    ],
    example:
      "A staff member can scan products into a checkout while management reviews stock and sales through the web dashboard. This brings the customer-facing sale and the back-office view into the same operational process.",
  },
  "my-writer": {
    audience:
      "Built for authors, educators and subject specialists developing a long-form manuscript from an idea and supporting material. Scriptorium turns a large writing project into smaller tasks that the author can review and direct.",
    strengths: [
      {
        title: "Turn a premise into a workable plan",
        description:
          "Section planning breaks the manuscript into specific writing tasks, giving the author a structure to inspect before drafting begins.",
      },
      {
        title: "Keep the author involved",
        description:
          "Human review checkpoints let the author adjust a task’s direction and approve it before the next section is drafted.",
      },
      {
        title: "Bring drafting stages together",
        description:
          "Research, live prose streaming and manuscript compilation connect several writing steps in one workspace, with a Markdown file available at the end.",
      },
    ],
    example:
      "An educator drafting a non-fiction book can supply an outline and reference notes, review the proposed sections and approve them one at a time. The resulting manuscript becomes material the author can edit, refine and prepare for their intended audience.",
  },
  "sell-my-notes": {
    audience:
      "Created for South African students looking for relevant study resources and students who want to offer materials they have prepared. It gives both sides a dedicated marketplace around notes, summaries and past papers.",
    strengths: [
      {
        title: "Make study resources easier to discover",
        description:
          "Listings and topic organisation help buyers explore available material and narrow their search to resources relevant to their studies.",
      },
      {
        title: "Give note creators a route to buyers",
        description:
          "Upload and pricing tools let students present their own materials in a structured listing rather than managing each potential sale through separate messages.",
      },
      {
        title: "Connect purchase and delivery",
        description:
          "PayFast integration and payment-linked file access connect the transaction with the buyer’s route to the purchased resource.",
      },
    ],
    example:
      "A student with a set of revision summaries can create a listing and set a price. Another student can discover the material, complete the purchase flow and access the purchased files through the platform.",
  },
  "make-my-notes": {
    audience:
      "Designed for learners revising from past papers and educators looking to organise exam-based study material. It connects source papers with a more readable note format and a structured browsing experience.",
    strengths: [
      {
        title: "Find material within a useful structure",
        description:
          "Grade, subject and province organisation helps learners locate resources that match their study context instead of browsing an unsorted collection of PDFs.",
      },
      {
        title: "Make exam content easier to work through",
        description:
          "Text extraction and note generation turn source papers into material that can be read in sections, supporting a more focused revision session.",
      },
      {
        title: "Give revision a starting point",
        description:
          "Generated notes provide a basis for reviewing topics alongside the original paper and memo, helping learners decide what to practise next.",
      },
    ],
    example:
      "A learner preparing for an exam can select their grade and subject, open notes based on a past paper and use them to identify topics to revisit. They can then work through the source questions to practise applying those ideas.",
  },
};
