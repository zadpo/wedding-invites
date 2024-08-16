import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqItems = [
  {
    id: "item-1",
    question: "When and where is the wedding?",
    answer: "The wedding will take place on December 12, 2022, at [Venue Name and Address].",
  },
  {
    id: "item-2",
    question: "What is the dress code?",
    answer: "The dress code is formal. Please wear your finest attire to celebrate this special occasion.",
  },
  {
    id: "item-3",
    question: "Will there be a reception?",
    answer:
      "Yes, there will be a reception following the ceremony. Details will be provided on the invitation.",
  },
  {
    id: "item-4",
    question: "Can I bring a guest?",
    answer:
      "Please refer to your invitation for details on guest policies. If you have any specific questions, feel free to contact us.",
  },
  {
    id: "item-5",
    question: "Is there parking available at the venue?",
    answer:
      "Yes, there is ample parking available at the venue. Directions and parking instructions will be included with your invitation.",
  },
];

export function FAQ() {
  return (
    <div className="bg-[#FBFBFE]  rounded-md px-2 py-2">
      <Accordion type="single" collapsible className="w-full">
        <h1 className="font-bold">Frequently Asks Questions</h1>
        {faqItems.map((item) => (
          <AccordionItem key={item.id} value={item.id}>
            <AccordionTrigger className="text-sm">{item.question}</AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
