import { useState } from "react";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import { notes } from "../data/notes";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const synonyms = {
    "cpp": "c++",
    "c plus plus": "c++",

    "dot net": ".net",
    "dotnet": ".net",

    "dsa": "dsa",
    "data structure": "dsa",
    "data structures": "dsa",
    "algorithm": "dsa",
    
    "os": "operating system",
    "sdlc": "operating system",
    "software engineering": "operating system",
    "concept of opera": "operating system",

    "spring": "web java",
    "spring boot": "web java",
    "web based java": "web java",
    
    "html": "web programming",
    "css": "web programming",
    "javascript": "web programming"
  };

  const filteredNotes = notes.filter((note) => {
    const normalize = (str) => str.toLowerCase().trim();
    const query = normalize(searchQuery);

    const matchesCategory = selectedCategory === "All" || note.type === selectedCategory;

    if (!query) return matchesCategory;

    const searchTerms = [query];

    Object.keys(synonyms).forEach(key => {
        if (key.startsWith(query)) {
            searchTerms.push(synonyms[key]);
        }
    });

    const matchesSearch = searchTerms.some(term => 
        normalize(note.title).includes(term) || 
        normalize(note.type).includes(term)
    );

    return matchesCategory && matchesSearch;
  });

  const categories = [
    "All", 
    "C++", 
    "Core Java", 
    "Web Java", 
    "Operating System", 
    "DSA", 
    ".NET", 
    "Web Programming", 
    "Aptitude"
  ];

  return (
    <div className="min-h-screen bg-slate-950">
      <Jumbotron />
      
      {/* Main Content Section */}
      <div id="notes-section" className="container mx-auto px-4 py-16">
        
        {/* Search and Filter Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
            
            <h2 className="text-3xl font-bold text-white border-l-4 border-blue-600 pl-4">
              Library
            </h2>

            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                
                {/* Search Input */}
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                    <input 
                        type="text" 
                        className="block w-full sm:w-64 p-3 pl-10 text-sm border rounded-lg bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" 
                        placeholder="Search (e.g., 'dsa', 'spring')..." 
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>

                {/* Dropdown Filter */}
                <select 
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="bg-gray-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:w-auto p-2.5"
                >
                    {categories.map((cat) => (
                        <option key={cat} value={cat}>{cat}</option>
                    ))}
                </select>
            </div>
        </div>
        
        {/* Grid Layout */}
        {filteredNotes.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filteredNotes.map((note) => (
              <Card 
                key={note.id}
                id={note.id}
                title={note.title}
                image={note.image}
                type={note.type}
              />
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500 mt-10">
            <p className="text-xl">No notes found matching "{searchQuery}"</p>
          </div>
        )}

      </div>
    </div>
  );
}

export default Home;