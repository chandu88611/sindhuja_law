import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function AccordionComponent() {
  return (
    <div>
      <Accordion
        sx={{
          padding: "7px",
          backgroundImage: "linear-gradient(90deg, rgba(31,147,22,0.9977240896358543) 6%, rgba(46,59,5,1) 93%)",
          color: "white",
          "& .MuiAccordionSummary-content": {
            backgroundColor: "transparent",
            color: "white",
          },
          "& .MuiAccordionDetails-root": {
            backgroundColor: "transparent",
            color: "white",
          },
        }}
        defaultExpanded
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{ backgroundColor: "transparent", color: "black" }}
        >
          <Typography>
            How long does the property buying process typically take?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The timeline for buying property can vary depending on factors such
            as the complexity of the transaction and any legal issues that
            arise. On average, it can take anywhere from 30 to 90 days from the
            offer acceptance to closing.
          </Typography>
        </AccordionDetails>
      </Accordion>
      {/* <Accordion
        sx={{
          padding: "7px",
          backgroundImage: "linear-gradient(90deg, rgba(31,147,22,0.9977240896358543) 6%, rgba(46,59,5,1) 93%)",
          color: "white",
          "& .MuiAccordionSummary-content": {
            backgroundColor: "transparent",
            color: "white",
          },
          "& .MuiAccordionDetails-root": {
            backgroundColor: "transparent",
            color: "white",
          },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
          sx={{ backgroundColor: "transparent", color: "black" }}
        >
          <Typography>
            What should I do if I'm involved in a title dispute?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            If you're involved in a title dispute, it's essential to seek legal
            assistance promptly. Our experienced property law team can help you
            navigate the dispute, conduct a thorough title search, and work
            towards a resolution through negotiation or litigation if necessary
          </Typography>
        </AccordionDetails>
      </Accordion> */}

      <Accordion
        sx={{
          padding: "7px",
          backgroundImage: "linear-gradient(90deg, rgba(31,147,22,0.9977240896358543) 6%, rgba(46,59,5,1) 93%)",
          color: "white",
          "& .MuiAccordionSummary-content": {
            backgroundColor: "transparent",
            color: "white",
          },
          "& .MuiAccordionDetails-root": {
            backgroundColor: "transparent",
            color: "white",
          },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
          sx={{ backgroundColor: "transparent", color: "black" }}
        >
          <Typography>
            What should I do if I'm involved in a title dispute?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            If you're involved in a title dispute, it's essential to seek legal
            assistance promptly. Our experienced property law team can help you
            navigate the dispute, conduct a thorough title search, and work
            towards a resolution through negotiation or litigation if necessary
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        sx={{
          padding: "7px",
          backgroundImage: "linear-gradient(90deg, rgba(31,147,22,0.9977240896358543) 6%, rgba(46,59,5,1) 93%)",
          color: "white",
          "& .MuiAccordionSummary-content": {
            backgroundColor: "transparent",
            color: "white",
          },
          "& .MuiAccordionDetails-root": {
            backgroundColor: "transparent",
            color: "white",
          },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
          sx={{ backgroundColor: "transparent", color: "black" }}
        >
          <Typography>
            How is child custody determined in divorce proceedings?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Child custody arrangements are determined based on the best
            interests of the child, taking into account factors such as each
            parent's ability to provide care, the child's relationship with each
            parent, and the child's preferences if they are of a suitable age.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        sx={{
          padding: "7px",
          backgroundImage: "linear-gradient(90deg, rgba(31,147,22,0.9977240896358543) 6%, rgba(46,59,5,1) 93%)",
          color: "white",
          "& .MuiAccordionSummary-content": {
            backgroundColor: "transparent",
            color: "white",
          },
          "& .MuiAccordionDetails-root": {
            backgroundColor: "transparent",
            color: "white",
          },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
          sx={{ backgroundColor: "transparent", color: "black" }}
        >
          <Typography>
            What are the eligibility requirements for different types of visas?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Visa eligibility requirements vary depending on the type of visa
            you're applying for and your individual circumstances. Our
            immigration law experts can assess your situation and guide you
            through the application process, ensuring that you meet all
            necessary criteria.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        sx={{
          padding: "7px",
          backgroundImage: "linear-gradient(90deg, rgba(31,147,22,0.9977240896358543) 6%, rgba(46,59,5,1) 93%)",
          color: "white",
          "& .MuiAccordionSummary-content": {
            backgroundColor: "transparent",
            color: "white",
          },
          "& .MuiAccordionDetails-root": {
            backgroundColor: "transparent",
            color: "white",
          },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
          sx={{ backgroundColor: "transparent", color: "black" }}
        >
          <Typography>
            {" "}
            What steps should I take if I've been a victim of cyber fraud?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            If you've been a victim of cyber fraud, it's crucial to act quickly
            to minimize the damage. Contact our cyber law specialists who can
            advise you on steps to take, such as reporting the incident to the
            authorities, notifying your bank or credit card company, and taking
            measures to secure your personal information.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        sx={{
          padding: "7px",
          backgroundImage: "linear-gradient(90deg, rgba(31,147,22,0.9977240896358543) 6%, rgba(46,59,5,1) 93%)",
          color: "white",
          "& .MuiAccordionSummary-content": {
            backgroundColor: "transparent",
            color: "white",
          },
          "& .MuiAccordionDetails-root": {
            backgroundColor: "transparent",
            color: "white",
          },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
          sx={{ backgroundColor: "transparent", color: "black" }}
        >
          <Typography>
            {" "}
            How long does it usually take to process a citizenship application?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The processing time for a citizenship application can vary depending
            on factors such as the backlog of applications and the complexity of
            your case. On average, it can take anywhere from 6 months to several
            years to complete the process.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        sx={{
          padding: "7px",
          backgroundImage: "linear-gradient(90deg, rgba(31,147,22,0.9977240896358543) 6%, rgba(46,59,5,1) 93%)",
          color: "white",
          "& .MuiAccordionSummary-content": {
            backgroundColor: "transparent",
            color: "white",
          },
          "& .MuiAccordionDetails-root": {
            backgroundColor: "transparent",
            color: "white",
          },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
          sx={{ backgroundColor: "transparent", color: "black" }}
        >
          <Typography>
            {" "}
            What legal options are available for victims of matrimonial fraud?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Victims of matrimonial fraud may have legal remedies available to
            them, such as pursuing civil litigation for fraud or seeking an
            annulment of the marriage. Our matrimonial fraud experts can assess
            your situation and advise you on the best course of action.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        sx={{
          padding: "7px",
          backgroundImage: "linear-gradient(90deg, rgba(31,147,22,0.9977240896358543) 6%, rgba(46,59,5,1) 93%)",
          color: "white",
          "& .MuiAccordionSummary-content": {
            backgroundColor: "transparent",
            color: "white",
          },
          "& .MuiAccordionDetails-root": {
            backgroundColor: "transparent",
            color: "white",
          },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
          sx={{ backgroundColor: "transparent", color: "black" }}
        >
          <Typography>
            {" "}
            How can I protect my personal data from cyber threats?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            There are several steps you can take to protect your personal data
            from cyber threats, such as using strong, unique passwords, enabling
            two-factor authentication, keeping your software up to date, and
            being cautious about sharing personal information online.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        sx={{
          padding: "7px",
          backgroundImage: "linear-gradient(90deg, rgba(31,147,22,0.9977240896358543) 6%, rgba(46,59,5,1) 93%)",
          color: "white",
          "& .MuiAccordionSummary-content": {
            backgroundColor: "transparent",
            color: "white",
          },
          "& .MuiAccordionDetails-root": {
            backgroundColor: "transparent",
            color: "white",
          },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
          sx={{ backgroundColor: "transparent", color: "black" }}
        >
          <Typography>
            {" "}
            What factors should I consider when choosing a lawyer for my case?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            When choosing a lawyer, it's essential to consider factors such as
            their experience, expertise in the relevant area of law, track
            record of success, communication style, and fee structure. Our firm
            prides itself on providing experienced advocates who offer
            personalized, client-focused service.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        sx={{
          padding: "7px",
          backgroundImage: "linear-gradient(90deg, rgba(31,147,22,0.9977240896358543) 6%, rgba(46,59,5,1) 93%)",
          color: "white",
          "& .MuiAccordionSummary-content": {
            backgroundColor: "transparent",
            color: "white",
          },
          "& .MuiAccordionDetails-root": {
            backgroundColor: "transparent",
            color: "white",
          },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
          sx={{ backgroundColor: "transparent", color: "black" }}
        >
          <Typography>
            {" "}
            What are the potential outcomes of deportation defense proceedings?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The potential outcomes of deportation defense proceedings vary
            depending on the specifics of the case. Possible outcomes may
            include successfully challenging the grounds for deportation,
            obtaining relief from removal, or negotiating a voluntary departure
            agreement. Our immigration law team can assess your situation and
            advocate for the best possible outcome.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default AccordionComponent;
