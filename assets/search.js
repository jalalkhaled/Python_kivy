
  // Symptom search database
  const symptomDatabase = [
    
    { symptom: "Chest Pain", page: "regional_pages/cardiovascular.html", category: "Cardiovascular" },
    { symptom: "Generalized Edema", page: "regional_pages/cardiovascular.html", category: "Cardiovascular" },
    { symptom: "Narrow QRS Tachycardia", page: "regional_pages/cardiovascular.html", category: "Cardiovascular" },
    { symptom: "Bradycardia", page: "regional_pages/cardiovascular.html", category: "Cardiovascular" },
    { symptom: "Wide-Complex Tachycardia", page: "regional_pages/cardiovascular.html", category: "Cardiovascular" },
    { symptom: "Stable Angina", page: "regional_pages/cardiovascular.html", category: "Cardiovascular" },
    { symptom: "Unstable Angina/NSTEMI", page: "regional_pages/cardiovascular.html", category: "Cardiovascular" },
    { symptom: "Systolic Murmurs", page: "regional_pages/cardiovascular.html", category: "Cardiovascular" },
    { symptom: "Palpitations", page: "regional_pages/cardiovascular.html", category: "Cardiovascular" },
    { symptom: "Hypotension", page: "regional_pages/cardiovascular.html", category: "Cardiovascular" },
    { symptom: "Aphasia", page: "regional_pages/Neurology.html", category: "Neurology" },
    { symptom: "Acute Headache", page: "regional_pages/Neurology.html", category: "Neurology" },
    { symptom: "Brain Death", page: "regional_pages/Neurology.html", category: "Neurology" },
    { symptom: "Coma", page: "regional_pages/Neurology.html", category: "Neurology" },
    { symptom: "Disturbances of Smell and Taste", page: "regional_pages/Neurology.html", category: "Neurology" },
    { symptom: "Chronic Behavior Change", page: "regional_pages/Neurology.html", category: "Neurology" },
    { symptom: "Acute Confusional State", page: "regional_pages/Neurology.html", category: "Neurology" },
    { symptom: "Hyperkinesias", page: "regional_pages/Neurology.html", category: "Neurology" },
    { symptom: "Peripheral Neuropathy", page: "regional_pages/Neurology.html", category: "Neurology" },
    { symptom: "Tremor", page: "regional_pages/Neurology.html", category: "Neurology" },
    { symptom: "Gait Disturbances", page: "regional_pages/Neurology.html", category: "Neurology" },
    { symptom: "Weakness", page: "regional_pages/Neurology.html", category: "Neurology" },
    { symptom: "Status Epilepticus", page: "regional_pages/Neurology.html", category: "Neurology" },
    { symptom: "Seizures", page: "regional_pages/Neurology.html", category: "Neurology" },
    { symptom: "Dizziness", page: "regional_pages/Neurology.html", category: "Neurology" },
    { symptom: "Memory Loss", page: "regional_pages/Neurology.html", category: "Neurology" },
    { symptom: "Acute Stroke", page: "regional_pages/Neurology.html", category: "Neurology" },
    { symptom: "Transient Monocular Visual Loss", page: "regional_pages/Neurology.html", category: "Neurology" },
    { symptom: "Transient Ischemic Attack and Stroke Evaluation", page: "regional_pages/Neurology.html", category: "Neurology"},
    { symptom: "Chronic Headache", page: "regional_pages/Neurology.html", category: "Neurology" },
    { symptom: "Cough", page: "respiratory.html", category: "Respiratory" },
    { symptom: "Shortness of Breath", page: "respiratory.html", category: "Respiratory" },
    { symptom: "HTN in Pregnancy", page: "obstetric.html", category: "Obstetric" },
    { symptom: "Pre-eclampsia", page: "obstetric.html", category: "Obstetric" },
    { symptom: "Diabetes Management", page: "endocrinology.html", category: "Endocrinology" },
    { symptom: "Abdominal Pain", page: "git.html", category: "Gastroenterology" },
    { symptom: "Jaundice", page: "hepatology.html", category: "Hepatology" },
    { symptom: "Proteinuria", page: "nephrology.html", category: "Nephrology" },
    { symptom: "Joint Pain", page: "rheumatology.html", category: "Rheumatology" },
    { symptom: "Anemia", page: "hematology.html", category: "Hematology" },
    { symptom: "Pediatric Fever", page: "pediatric.html", category: "Pediatric" },
    { symptom: "Vision Loss", page: "ophthalmology.html", category: "Ophthalmology" },
    { symptom: "Rash", page: "dermatology.html", category: "Dermatology" },
    { symptom: "Fecal Incontinence", page: "regional_pages/git.html", category: "Gastroenterology" },
    { symptom: "Flatulence", page: "regional_pages/git.html", category: "Gastroenterology" },
    { symptom: "Positive FOBT", page: "regional_pages/git.html", category: "Gastroenterology" },
    { symptom: "Anorectal Pain", page: "regional_pages/git.html", category: "Gastroenterology" },
    { symptom: "Constipation", page: "regional_pages/git.html", category: "Gastroenterology" },
    { symptom: "Chronic Diarrhea", page: "regional_pages/git.html", category: "Gastroenterology" },
    { symptom: "Acute Diarrhea", page: "regional_pages/git.html", category: "Gastroenterology" },
    { symptom: "Rectal Bleeding", page: "regional_pages/git.html", category: "Gastroenterology" },
    { symptom: "Gastrointestinal Bleeding", page: "regional_pages/git.html", category: "Gastroenterology" },
    { symptom: "Dyspepsia", page: "regional_pages/git.html", category: "Gastroenterology" },
    { symptom: "Noncardiac Chest Pain", page: "regional_pages/git.html", category: "Gastroenterology" },
    { symptom: "Nausea and Vomiting", page: "regional_pages/git.html", category: "Gastroenterology" },
    { symptom: "Chronic Abdominal Pain", page: "regional_pages/git.html", category: "Gastroenterology" },
    { symptom: "Acute Abdominal Pain", page: "regional_pages/git.html", category: "Gastroenterology" },
    { symptom: "Tinnitus", page: "regional_pages/ent.html", category: "ENT" },
    { symptom: "Stridor", page: "regional_pages/ent.html", category: "ENT" },
    { symptom: "Epistaxis", page: "regional_pages/ent.html", category: "ENT" },
    { symptom: "Elevated Serum Amylase", page: "regional_pages/hepatology.html", category: "Hepatology" },
    { symptom: "Asymptomatic Abnormal Liver Aminotransferases", page: "regional_pages/hepatology.html", category: "Hepatology" },
    { symptom: "Biliary Colic", page: "regional_pages/hepatology.html", category: "Hepatology" },
    { symptom: "Jaundice", page: "regional_pages/hepatology.html", category: "Hepatology" },
    { symptom: "Ascites", page: "regional_pages/hepatology.html", category: "Hepatology" },
    { symptom: "Generalized Edema", page: "regional_pages/cardiovascular.html", category: "Cardiovascular" },
  ];

  const searchForm = document.getElementById('symptom-search-form');
  const searchInput = document.getElementById('symptom-search');
  const searchResults = document.getElementById('search-results');

  searchInput.addEventListener('input', function() {
    const query = this.value.trim().toLowerCase();
    if (query.length > 1) {
      const results = symptomDatabase.filter(item => 
        item.symptom.toLowerCase().includes(query) || 
        item.category.toLowerCase().includes(query)
      );
      displayResults(results);
    } else {
      searchResults.style.display = 'none';
    }
  });

  searchForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const query = searchInput.value.trim().toLowerCase();
    if (query.length > 0) {
      const results = symptomDatabase.filter(item => 
        item.symptom.toLowerCase().includes(query) || 
        item.category.toLowerCase().includes(query)
      );
      if (results.length > 0) {
        navigateTo(results[0].page);
      }
    }
  });

  function displayResults(results) {
    if (results.length === 0) {
      searchResults.innerHTML = '<div class="no-results">No symptoms found matching your search</div>';
      searchResults.style.display = 'block';
      return;
    }

    searchResults.innerHTML = results.map(item => `
      <div class="search-result-item" onclick="navigateTo('${item.page}')">
        <div>${item.symptom}</div>
        <div class="category">${item.category}</div>
      </div>
    `).join('');

    searchResults.style.display = 'block';
  }

  // Close results when clicking outside
  document.addEventListener('click', function(e) {
    if (!searchForm.contains(e.target)) {
      searchResults.style.display = 'none';
    }
  });
