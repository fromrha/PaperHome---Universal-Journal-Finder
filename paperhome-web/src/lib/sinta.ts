import journalsData from '../../data/master_journals.json';

export interface Journal {
    name: string;
    rank: string;
    issn: string;
    publisher: string;
    broad_field: string;
    specific_focus: string[] | string;
    avg_processing_time: string;
    url: string;
}

export function getSintaJournals(researchField: string): Journal[] {
    try {
        // Cast the imported JSON to our Journal type
        const journals: Journal[] = journalsData as Journal[];

        if (!journals || journals.length === 0) {
            console.warn("No SINTA journals found in database.");
            return [];
        }

        // Return ALL journals to allow the sophisticated Jaccard/Broad Field matching
        // in the API route to determine what is relevant.
        // Pre-filtering here was causing "0 results" because of strict text matching.
        return journals;

    } catch (error) {
        console.error("Error loading SINTA journals:", error);
        return [];
    }
}
