window.addEventListener('DOMContentLoaded', function() {
  var articles = {
    "buying-property-greece-risk": {
      headline: "Buying Property in Greece: Risk Guide for Foreign Buyers",
      description: "Structural defects, illegal extensions and deferred maintenance rarely show in the asking price. A technical risk framework for foreign buyers in Greece.",
      datePublished: "2026-03-03",
      dateModified: "2026-06-09",
      faqs: [
        {
          question: "What are the biggest technical risks of buying property in Greece?",
          answer: "The most consistent technical risks are: unauthorised constructions that transfer liability to the buyer on purchase, permit file discrepancies between the approved drawings and the built structure, deferred maintenance on MEP systems and roofing, and structural issues in older reinforced concrete buildings. None of these are identified through legal due diligence alone."
        },
        {
          question: "Does legal due diligence in Greece cover technical risks?",
          answer: "No. Legal due diligence in Greece covers title, encumbrances and ownership history. It does not assess structural condition, permit compliance, MEP systems or capital expenditure. Technical due diligence must be commissioned separately and independently of the legal process."
        },
        {
          question: "How do I protect myself when buying property in Greece?",
          answer: "The primary protection is independent technical due diligence commissioned before contracts are signed — not through the seller's recommended professionals. This includes a permit file review, physical structural and MEP inspection, and a capital expenditure assessment. Combined with independent legal due diligence, this identifies the material risks before capital is committed."
        },
        {
          question: "Are property risks in Greece higher for foreign buyers?",
          answer: "The risks are the same as for any buyer, but foreign buyers are more frequently exposed. They typically rely on intermediaries introduced by the seller, lack local context to identify what is not being disclosed and are less likely to commission independent technical review. These factors combine to increase the probability of undisclosed exposure transferring to the buyer."
        }
      ]
    },
    "illegal-constructions-greece": {
      headline: "Illegal Constructions Greece: What Buyers Inherit",
      description: "Illegal constructions in Greece transfer to the buyer on purchase. Fines range from EUR 200 to 2,000 per sqm or demolition. What to find before you sign.",
      datePublished: "2026-03-11",
      dateModified: "2026-06-09",
      faqs: [
        {
          question: "Do illegal constructions transfer to the buyer in Greece?",
          answer: "Yes. Under Greek law, unauthorised constructions transfer with the title on sale. The buyer inherits both the physical structure and the full regularisation liability, regardless of whether the seller disclosed it."
        },
        {
          question: "What are the fines for illegal constructions in Greece?",
          answer: "Regularisation fines run from €200 to €2,000 per square metre depending on zone, building use and construction type. A 40% surcharge applies to all current submissions. Category 5 constructions — typically coastal zone violations — cannot be regularised at all and must be demolished."
        },
        {
          question: "What is the deadline to regularise illegal constructions in Greece?",
          answer: "The current regularisation window closes 31 March 2028 under Law 5261/2025. After that date, there is no resolution pathway for unresolved exposures. Properties with open violations after the deadline carry liability with no legal remedy."
        },
        {
          question: "How do I check for illegal constructions before buying property in Greece?",
          answer: "A permit file review cross-checks the physical structure against the original approved plans on file with the local planning authority. This is not a standard part of a conveyancing process — it must be commissioned separately as part of a property inspection or technical due diligence mandate."
        }
      ]
    },
    "greece-property-risk-checklist": {
      headline: "21-Point Property Risk Checklist Greece",
      description: "A structured 21-point technical and legal risk checklist for foreign buyers acquiring property in Greece.",
      datePublished: "2026-03-11",
      dateModified: "2026-06-09",
      faqs: [
        {
          question: "What are the main technical risks of buying property in Greece?",
          answer: "The highest-frequency technical risks in Greek property acquisitions are: unauthorised constructions that transfer liability to the buyer, permit file discrepancies between the approved drawings and the built structure, deferred maintenance on MEP systems, seismic-related structural issues in older reinforced concrete buildings, and coastal zone violations that cannot be regularised. These are not identified in a standard conveyancing process."
        },
        {
          question: "Do illegal constructions affect all Greek properties?",
          answer: "Illegal constructions are common across Greek residential stock, particularly in properties built before 2000. The most frequent examples are enclosed balconies, rooftop additions, basement conversions and extended ground-floor structures built informally in the 1980s and 1990s. A permit cross-check — not a legal review — is required to identify them."
        },
        {
          question: "What technical checks should I do before buying property in Greece?",
          answer: "At minimum: (1) a permit file review cross-checking the physical structure against the approved drawings at the local planning authority; (2) a physical structural and MEP inspection; (3) confirmation of the coastal zone setback status for waterfront properties; (4) verification of the property's cadastre registration status. These are separate from the legal due diligence your lawyer handles."
        },
        {
          question: "Is it safe to buy property in Greece as a foreigner?",
          answer: "Yes, subject to proper due diligence. The risks are not unique to foreign buyers, but foreign buyers are more frequently exposed because they rely on intermediaries and do not have the local context to identify what is not being disclosed. Independent technical and legal advice — not the seller's recommended professionals — is the primary risk mitigation."
        }
      ]
    },
    "property-inspection-greece": {
      headline: "You Got the Keys. Now the Problems Start.",
      description: "Most defects in Greek property surface after purchase, not during. What foreign buyers discover after getting the keys and how an independent property inspection prevents it.",
      datePublished: "2026-04-29",
      dateModified: "2026-06-09",
      faqs: [
        {
          question: "What does a property inspection in Greece cover?",
          answer: "An independent property inspection in Greece covers structural condition, building envelope integrity, MEP systems (mechanical, electrical, plumbing), permit compliance cross-check, visible moisture and dampness indicators, roofing condition, and documented defects with repair cost estimates. The scope includes a written English-language report."
        },
        {
          question: "How much does a property inspection in Greece cost?",
          answer: "An independent property inspection in Greece starts from €5,000 for a standard residential asset. The fee reflects travel, on-site time, permit file review and a structured English-language written report. Multi-unit properties, commercial assets and larger villas carry a higher fee. The cost is typically recovered in the first negotiation it supports."
        },
        {
          question: "Is a property inspection legally required in Greece?",
          answer: "No. A property inspection is not a legal requirement in Greece. Unlike the UK or parts of the US, there is no mandatory pre-purchase survey system. Buyers who do not independently commission an inspection proceed with no verified technical information about the asset they are purchasing."
        },
        {
          question: "Who carries out a property inspection in Greece?",
          answer: "An independent technical advisor carries out the inspection. The assessment covers the physical structure, a cross-check against the permit file at the local planning authority and documented technical findings in a written report. This is separate from the lawyer's role in the transaction, which covers title, encumbrances and legal due diligence."
        },
        {
          question: "What is the difference between a property inspection and a building survey in Greece?",
          answer: "The terms are used interchangeably in the Greek context. Neither is a regulated profession with a standardised scope in Greece, unlike the RICS-structured surveys available in the UK. What matters is who carries out the inspection and what the report covers — structural condition, permit verification and MEP systems should all be included."
        }
      ]
    },
    "property-condition-assessment-greece": {
      headline: "Property CapEx Planning Greece: 10-Year Cost Framework",
      description: "The acquisition price is not the cost of ownership. A technical condition assessment projects what a Greek property will require over 10 years before you commit.",
      datePublished: "2026-05-04",
      dateModified: "2026-06-09",
      faqs: [
        {
          question: "What is a property condition assessment in Greece?",
          answer: "A property condition assessment evaluates the physical state of a property and projects its capital expenditure requirements over a defined period — typically 10 years. It assigns remaining service life to major building components (roof, MEP systems, structure, envelope) and converts uncertain future costs into a scheduled liability. The output is used to assess the real cost of ownership before acquisition."
        },
        {
          question: "Why do I need a CapEx assessment before buying property in Greece?",
          answer: "The acquisition price reflects the current market, not the building's deferred maintenance. A property with €50,000 in capital expenditure required within the first 5 years is not the same acquisition as one without. A CapEx assessment identifies this gap before contracts are signed and provides a factual basis for price negotiation or cost planning."
        },
        {
          question: "What does a 10-year capital expenditure assessment cover in Greece?",
          answer: "The assessment covers all major building systems: structural elements, roofing and waterproofing, building envelope (walls, windows, external finishes), mechanical systems (HVAC, heating), electrical systems and plumbing. Each component is assessed for condition and remaining service life, with replacement cost benchmarks projected over the assessment period."
        },
        {
          question: "Is a CapEx assessment the same as a property inspection?",
          answer: "No. A property inspection identifies visible defects at the point of purchase. A capital expenditure assessment goes further — it projects what the building will require financially over time, even for components that are currently functional. The two are complementary: the inspection identifies immediate issues; the CapEx assessment identifies the forward cost of ownership."
        }
      ]
    },
    "golden-visa-greece-property-requirements-and-technical-risks": {
      headline: "Golden Visa Greece: Property Requirements and Technical Risks",
      description: "Greece Golden Visa requires EUR 400k-800k in a single property of 120m2 minimum. The legal process is handled. The technical risks rarely are.",
      datePublished: "2026-05-11",
      dateModified: "2026-06-09",
      faqs: [
        {
          question: "What is the minimum investment for the Greece Golden Visa in 2026?",
          answer: "The minimum investment is €400,000 for properties in Attica, Thessaloniki, Mykonos, Santorini and islands with populations above 3,100. A €250,000 threshold applies to commercial-to-residential conversions and listed heritage buildings across Greece. The qualifying property must be a single asset of at least 120 square metres and cannot be used for short-term rental."
        },
        {
          question: "Can I buy any property for the Greece Golden Visa?",
          answer: "No. The qualifying property must meet the minimum investment threshold, be a single asset (not combined from multiple lower-value properties), have a minimum floor area of 120 square metres, and not be used for short-term rental. Properties with unresolved permit violations, active encumbrances or disputed cadastre status can create complications in the residency application process."
        },
        {
          question: "What technical risks exist for Golden Visa properties?",
          answer: "The most common technical issues in Golden Visa qualifying assets are: unauthorised constructions that may complicate title transfer, permit file discrepancies that affect legal eligibility, and deferred capital expenditure that affects the real acquisition cost. A property priced at €400,000 with €80,000 in undisclosed regularisation and maintenance liability is not a €400,000 investment."
        },
        {
          question: "Does a Golden Visa property require a technical inspection?",
          answer: "It is not legally required, but it is advisable for any acquisition at this value. The Golden Visa application process focuses on legal eligibility — it does not verify technical condition, permit compliance or future capital requirements. These are identified through independent technical due diligence, not through the legal or notarial process."
        },
        {
          question: "How long does the Greece Golden Visa process take in 2026?",
          answer: "Following property acquisition, the Golden Visa application process currently takes approximately 12–24 months for initial residency card issuance, due to processing backlogs at the Greek immigration authority. The 5-year residency permit is renewable. Greek citizenship is available after 7 years of continuous residency."
        }
      ]
    },
    "how-to-check-for-illegal-constructions-in-greece-before-you-buy": {
      headline: "How to Check for Illegal Constructions in Greece Before You Buy",
      description: "Most illegal constructions in Greece are invisible to buyers without a permit check. Here is exactly how to identify them before contracts are signed.",
      datePublished: "2026-05-13",
      dateModified: "2026-06-09",
      faqs: [
        {
          question: "Can a lawyer identify illegal constructions in Greece?",
          answer: "A lawyer can review the title and encumbrance documentation but cannot identify physical illegal constructions without a permit file cross-check against the structure. Legal due diligence and technical due diligence are separate processes — a lawyer confirms ownership is clean; an engineer confirms the building matches what was permitted."
        },
        {
          question: "What documents are needed to check for illegal constructions in Greece?",
          answer: "The primary document is the original building permit file held at the local planning authority (Πολεοδομία), which includes the approved architectural drawings. These are cross-checked against the physical structure during the inspection. Supporting documents include the property's topographic survey and, where relevant, the Hellenic Cadastre records."
        },
        {
          question: "Are illegal constructions common in Greek property?",
          answer: "Yes. Estimates suggest a significant proportion of Greek residential property stock contains some form of unauthorised construction — most commonly rooftop additions, extended terraces, enclosed balconies and basement conversions. Many were built informally in the 1980s and 1990s and have never been detected in a standard transaction."
        },
        {
          question: "Who carries out an illegal construction check in Greece?",
          answer: "An independent technical advisor carries out the permit file review and physical cross-check. This is separate from a lawyer's role in the transaction. The assessment covers the planning authority file, comparison against the physical structure and documented discrepancies in a written report."
        }
      ]
    },
    "greek-property-due-diligence-for-non-eu-buyers": {
      headline: "Greek Property Due Diligence for Non-EU Buyers",
      description: "Non-EU buyers face specific legal and technical risks when acquiring property in Greece. What independent due diligence covers and why it matters before you commit.",
      datePublished: "2026-05-15",
      dateModified: "2026-06-09",
      faqs: [
        {
          question: "Can non-EU citizens buy property in Greece?",
          answer: "Yes. Non-EU citizens can purchase property in Greece without restrictions in most areas. Certain properties in designated border regions require additional Ministry of Defence approval, but this affects a small minority of transactions. Non-EU buyers follow the same purchase process as EU citizens, with additional requirements around AFM registration and capital transfer documentation."
        },
        {
          question: "What is the AFM and do non-EU buyers need one?",
          answer: "The AFM (Arithmos Forologikou Mitroou) is a Greek tax identification number required by all property buyers, regardless of nationality. Non-EU buyers must obtain one before completing a purchase. The application is made at a local tax office or through a lawyer with power of attorney and is typically issued within a few days."
        },
        {
          question: "What technical due diligence should non-EU buyers commission in Greece?",
          answer: "Non-EU buyers should commission an independent permit file review and physical condition assessment before signing any contract. Because non-EU buyers are more likely to rely on intermediaries introduced by the seller and less likely to have local context, independent technical review is the primary mechanism for identifying undisclosed liabilities before capital is committed."
        },
        {
          question: "What changes for non-EU buyers with the September 2026 inheritance law?",
          answer: "Binding inheritance contracts (klironomiki symvasi) become a recognised encumbrance category in Greece from September 2026. These do not appear in a standard encumbrance search conducted through existing protocols. For transactions completing after September 2026, the due diligence scope must include an explicit search for this new encumbrance type."
        }
      ]
    },
    "illegal-construction-law-5261-2025": {
      headline: "Greece Illegal Constructions Law 5261/2025: Buyer's Guide",
      description: "Greece extended the illegal construction regularization deadline to March 2028 under Law 5261/2025. What this means for foreign buyers and what it does not change.",
      datePublished: "2026-05-18",
      dateModified: "2026-06-09",
      faqs: [
        {
          question: "What does Law 5261/2025 change for property buyers in Greece?",
          answer: "Law 5261/2025 extended the regularisation deadline for illegal constructions to 31 March 2028. It did not change the liability framework — unauthorised constructions still transfer to the buyer on purchase, and Category 5 violations (primarily coastal zone) remain non-regularisable."
        },
        {
          question: "Does the 2028 deadline mean it is safe to buy a property with illegal constructions?",
          answer: "No. The deadline means eligible constructions can still be regularised before March 2028, at the buyer's cost. It does not eliminate the liability — it provides a time-limited resolution pathway. After March 2028, no pathway exists for unresolved exposures."
        },
        {
          question: "Which illegal constructions cannot be regularised under Law 5261/2025?",
          answer: "Category 5 constructions are excluded from regularisation under all frameworks including Law 5261/2025. These are primarily structures built within protected coastal zones (typically within 50 metres of the shoreline) without the required setback permits. They must be demolished."
        },
        {
          question: "What is the cost of regularising an illegal construction in Greece in 2026?",
          answer: "Fines range from €200 to €2,000 per square metre depending on zone and use, with a 40% surcharge on current submissions. A 100 sqm unauthorised addition in a standard zone can carry a regularisation cost of €28,000 to €140,000 before legal and administrative fees."
        }
      ]
    },
    "cost-of-building-survey-greece": {
      headline: "What Does a Building Survey in Greece Actually Cost?",
      description: "A building survey in Greece starts from EUR 5,000 for a standard residential property. What the fee covers, what it does not, and what you inherit without one.",
      datePublished: "2026-05-20",
      dateModified: "2026-06-09",
      faqs: [
        {
          question: "How much does a building survey cost in Greece?",
          answer: "A building survey in Greece starts from €5,000 for a standard residential property. The fee covers on-site inspection, permit file review and a structured English-language report. Larger properties, rural estates, multi-unit buildings and commercial assets are quoted individually based on scope and location."
        },
        {
          question: "What does a building survey in Greece include?",
          answer: "A building survey in Greece should include: structural condition assessment, building envelope review (roof, walls, windows), MEP systems evaluation, permit file cross-check against the physical structure, moisture and dampness inspection, and a written English-language report with findings and recommended actions. Not all providers in Greece offer the same scope — confirm what the report covers before commissioning."
        },
        {
          question: "Is a building survey worth it in Greece?",
          answer: "Yes. In a market where unauthorised constructions are common, legal due diligence does not cover technical condition, and most buyers do not have local technical knowledge, a building survey is the primary tool for identifying risks before capital is committed. Findings from a survey regularly support price reductions that exceed the survey fee by a factor of 10 or more."
        },
        {
          question: "How long does a building survey take in Greece?",
          answer: "The physical inspection of a standard residential property takes 3–6 hours on site. The written report is typically delivered within 5–10 working days. For properties outside Athens, Thessaloniki and major island hubs, access and travel logistics may extend the timeline. A remote asset review can precede the physical inspection and is typically delivered within 3–5 working days."
        }
      ]
    },
    "property-inspection-crete": {
      headline: "Property Inspection Crete: Foreign Buyer's Guide",
      description: "Crete sits in seismic Zone 4. Active demolitions of illegal coastal structures began in January 2026. What a property inspection in Crete must cover before you commit.",
      datePublished: "2026-05-22",
      dateModified: "2026-06-09",
      faqs: [
        {
          question: "What are the specific risks of buying property in Crete?",
          answer: "Crete sits in seismic Zone 4 — the highest hazard classification in Greece — which affects structural assessment requirements for older buildings. Coastal demolitions of illegal structures began in January 2026 following enforcement action, making coastal zone permit compliance particularly material. Agricultural land is widespread and carries strict building restrictions that buyers frequently misunderstand."
        },
        {
          question: "Are coastal properties in Crete at risk of demolition?",
          answer: "Yes. Greek authorities began active demolition of illegal coastal structures in Crete in January 2026. Properties within the coastal zone that have unauthorised construction not eligible for regularisation under Law 5261/2025 — primarily Category 5 constructions within 50 metres of the shoreline — face enforcement action. A permit compliance review before purchase is essential for any coastal property."
        },
        {
          question: "Is Crete in a seismic risk zone?",
          answer: "Yes. Crete is classified in seismic Zone 4, the highest hazard level in Greece. Buildings constructed before the 1985 seismic regulation update were designed to lower standards. A structural assessment for pre-1985 reinforced concrete buildings is recommended as part of any property inspection in Crete."
        },
        {
          question: "What does a property inspection in Crete cover?",
          answer: "A property inspection in Crete covers structural condition (with particular attention to seismic vulnerability in older buildings), building envelope integrity, MEP systems, permit file cross-check against the physical structure, and coastal zone compliance status for waterfront properties. The written report is delivered in English."
        }
      ]
    },
    "how-to-choose-a-property-inspector-in-athens": {
      headline: "How to Choose a Property Inspector in Athens",
      description: "Foreign buyers account for 40% of Athens transactions. Properties sell in 58 days. Here is how to choose an inspector who protects you, not the deal.",
      datePublished: "2026-05-25",
      dateModified: "2026-06-09",
      faqs: [
        {
          question: "How do I find an independent property inspector in Athens?",
          answer: "The key word is independent — meaning the inspector has no connection to the seller, the agent or the developer. An inspector introduced through the seller's network has a structural conflict of interest. An independent technical advisor is commissioned directly by the buyer, reports only to the buyer and has no financial interest in whether the transaction completes."
        },
        {
          question: "What should a property inspection in Athens cover?",
          answer: "A property inspection in Athens should cover structural condition (with attention to the building era — pre-1985 concrete carries different risk than post-2000 construction), building envelope, MEP systems, permit compliance cross-check against the approved drawings, rooftop additions (common in Athens and frequently unauthorised), and enclosed balconies. The report should be delivered in written English."
        },
        {
          question: "What questions should I ask before commissioning a property inspection?",
          answer: "Ask: Who do you work for — buyer or seller? Do you carry out the permit file review as part of the inspection? Do you provide a written English report? Have you inspected properties in this building era and neighbourhood before? If the inspector cannot confirm buyer-only representation and a permit review, the scope is incomplete."
        },
        {
          question: "How quickly do properties sell in Athens and why does it matter?",
          answer: "Properties in Athens sell in an average of 58 days in the current market, with foreign buyers accounting for approximately 40% of transactions. This pace creates pressure to move quickly and skip technical review. An inspection commissioned before the preliminary contract — not after — is the point at which findings can still affect the price or the decision to proceed."
        }
      ]
    },
    "buying-property-greece-as-an-american": {
      headline: "Buying Property in Greece as an American: 2026 Guide",
      description: "Americans can buy property in Greece without restrictions. The process has US-specific tax and reporting layers most buyers discover too late. What to know before you commit.",
      datePublished: "2026-05-27",
      dateModified: "2026-06-09",
      faqs: [
        {
          question: "Can Americans buy property in Greece?",
          answer: "Yes. There are no restrictions on US citizens purchasing residential or commercial property in Greece. Americans are treated as non-EU buyers and are entitled to the same property rights as Greek nationals, with the exception of certain properties in designated border regions which require additional Ministry of Defence approval."
        },
        {
          question: "What taxes do Americans pay when buying property in Greece?",
          answer: "The primary purchase tax is the property transfer tax at 3.09% of the taxable value. VAT applies on new builds from developers. US citizens must also comply with FBAR (FinCEN 114) reporting requirements if the purchase involves a foreign bank account exceeding $10,000 at any point, and FATCA reporting if applicable. Property ownership in Greece may also create Greek income tax obligations on rental income."
        },
        {
          question: "Do Americans need a lawyer to buy property in Greece?",
          answer: "Yes. A licensed Greek notary is legally required for all property transfers. A separate lawyer — not the notary — is strongly recommended to conduct title due diligence, review the purchase contract and represent the buyer's interests. The notary represents the transaction, not either party."
        },
        {
          question: "What is the process for Americans buying property in Greece?",
          answer: "The standard process involves: obtaining a Greek tax number (AFM), opening a Greek bank account, conducting legal and technical due diligence, signing a preliminary agreement if applicable, and completing the final transfer before a notary. US buyers should confirm compliance with FBAR and FATCA obligations with a US tax adviser before funds are transferred."
        }
      ]
    },
    "building-survey-greece-uk-buyers-guide": {
      headline: "Building Survey Greece: The UK Buyer's Guide",
      description: "What UK buyers call a building survey does not exist in Greece in the same form. What independent technical assessment covers, what it costs, and what British buyers get wrong.",
      datePublished: "2026-06-05",
      dateModified: "2026-06-09",
      faqs: [
        {
          question: "What is the equivalent of a UK building survey in Greece?",
          answer: "There is no direct equivalent. Greece does not have a regulated survey system comparable to the RICS Level 2 or Level 3 survey framework used in the UK. Independent technical assessment in Greece is commissioned on an unregulated basis. What matters is the scope — structural condition, permit compliance, MEP systems and a written English report — rather than a standardised product name."
        },
        {
          question: "Are there RICS surveyors in Greece?",
          answer: "RICS membership exists in Greece but is not widespread, and RICS-standard survey products are not routinely available in the market. UK buyers should not assume that a 'surveyor' in Greece operates to the same scope or standards as in the UK. Commissioning an independent technical assessment with an explicitly agreed scope is more reliable than relying on a job title."
        },
        {
          question: "What do UK buyers most commonly get wrong when buying property in Greece?",
          answer: "The most common errors are: assuming the legal process covers technical condition (it does not), relying on the seller's or agent's recommended inspector (structural conflict of interest), and not commissioning a permit file review (the most important technical step in Greece and one that does not exist in the UK process). A UK-style conveyancing process in Greece leaves significant technical exposure unaddressed."
        },
        {
          question: "How much does a building survey cost in Greece compared to the UK?",
          answer: "A building survey in Greece starts from €5,000, which includes the on-site inspection, permit file review at the local planning authority and a written English-language report. This is broadly comparable to a UK Level 3 survey on a similar property. The permit file review — with no UK equivalent — is included within this scope and is the element that most frequently identifies material risk."
        }
      ]
    },
    "technical-due-diligence-greece": {
      headline: "Technical Due Diligence Greece: Scope, Cost and Process",
      description: "Technical due diligence in Greece covers structural condition, permit compliance, MEP systems and a ten-year CapEx projection. What the process involves, what it costs, and when it is non-negotiable.",
      datePublished: "2026-06-08",
      dateModified: "2026-06-09",
      faqs: [
        {
          question: "What is technical due diligence in real estate?",
          answer: "Technical due diligence is an independent assessment of a property's physical condition, permit status, building systems, technical liabilities and future capital expenditure requirements before acquisition."
        },
        {
          question: "How is technical due diligence different from a property inspection?",
          answer: "A property inspection focuses on identifying visible defects and technical issues in a specific asset. Technical due diligence has a broader investment focus and evaluates compliance, condition, risk exposure and future capital requirements to support acquisition decisions."
        },
        {
          question: "What does technical due diligence typically cover?",
          answer: "A technical due diligence scope typically includes permit compliance, structural condition, building envelope assessment, MEP systems, life-safety systems, deferred maintenance, technical liabilities and a multi-year capital expenditure forecast."
        },
        {
          question: "How much does technical due diligence cost in Greece?",
          answer: "The cost depends on asset type, location, size and complexity. Commercial assets, hospitality properties, mixed-use developments and conversion projects generally require a broader scope than standard residential properties."
        },
        {
          question: "When is technical due diligence necessary?",
          answer: "Technical due diligence becomes essential when acquiring commercial property, development assets, hospitality projects, conversion schemes or any transaction where technical risk could materially affect value, financing, operations or future development plans."
        },
        {
          question: "Can technical due diligence identify permit discrepancies?",
          answer: "Yes. A core objective is to verify that the property's physical condition, approved drawings, permits and recorded documentation are aligned, and to identify discrepancies that may create legal, technical or financial risk."
        },
        {
          question: "Is technical due diligence relevant for Golden Visa investments?",
          answer: "Yes. While many Golden Visa acquisitions focus on legal eligibility, technical due diligence helps identify hidden liabilities, permit issues, construction risks and future capital expenditure requirements before funds are committed."
        }
      ]
    }
  };

  var slug = window.location.pathname.split("/").filter(Boolean).pop();
  var article = articles[slug];

  if (article) {
    var url = "https://www.kgnordic.com/insights/" + slug;

    var schemaEl = document.createElement("script");
    schemaEl.type = "application/ld+json";
    schemaEl.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      headline: article.headline,
      description: article.description,
      datePublished: article.datePublished,
      dateModified: article.dateModified,
      url: url,
      mainEntityOfPage: url,
      author: {
        "@type": "Organization",
        name: "KG Nordic Advisory",
        url: "https://www.kgnordic.com"
      },
      publisher: {
        "@type": "Organization",
        name: "KG Nordic Advisory",
        url: "https://www.kgnordic.com",
        logo: {
          "@type": "ImageObject",
          url: "https://framerusercontent.com/images/OecjukoqBvcVKP4ftIntfAT2i9Y.png"
        }
      }
    });
    document.head.appendChild(schemaEl);

    if (article.faqs && article.faqs.length > 0) {
      var faqEl = document.createElement("script");
      faqEl.type = "application/ld+json";
      faqEl.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: article.faqs.map(function(f) {
          return {
            "@type": "Question",
            name: f.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: f.answer
            }
          };
        })
      });
      document.head.appendChild(faqEl);
    }
  }
});
