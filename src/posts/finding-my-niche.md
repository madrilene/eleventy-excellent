---
title: "Finding My Niche"
description: 'A look at newsletter specialization ideation with JupyterLab'
date: 2024-07-21
---

This week we take a look at newsletter specialization ideation as a JupyterLab exercise.

# Getting Informed

If feedback is a gift, then reader feedback is a gift that keeps on giving. This week, I received feedback on the newsletter.

> You are all over the place. Instead of the map of Jay's mind, why not pick a niche topic and go very very deep?

This reader feedback got me thinking. What niche topic would be one I could go very deep on and keep up my regular pace of updates in a newsletter?

## Where do I start?

Could my prior writing have a theme that isn't obvious to me? What are the patterns buried within my ramblings?

I have posts in markdown format but my tagging has been lagging. If only there was a way to perform analysis on all my posts...

Oh, that's right. I can open JupyterLab and scratch this itch in a few minutes.

```zsh
➜  ~ git:(main) ✗ /opt/homebrew/opt/jupyterlab/bin/jupyter-lab
```

## open JupyterLab

[![Topics.ipnyb](/assets/images/screenshots/2024-07-21-13-13-57.png)](https://github.com/JayCuthrell/buttondown-python-scripts)

Side note: If you want to try this yourself, I'm adding to my [buttondown-python-scripts](https://github.com/JayCuthrell/buttondown-python-scripts) in the ```JupyterLab``` folder.

https://github.com/JayCuthrell/buttondown-python-scripts


## Goals

The script needs to be simple enough for me to grasp it. I used Google Gemini to help me make better mistakes. 🤣

- Analyze markdown files (.md) by extracting the text, cleaning it up, and identifying the most and least common words, two-word phrases (bigrams), and three-word phrases (trigrams) to help understand the key topics and language patterns.
- Use mature and documented libraries such as `glob`, `markdown`, `re`, `nltk`, `collections.Counter`, `nltk.tokenize`, `nltk.corpus`, `nltk.util`, and `bs4` for the required language resources (tokenizers, stop words, formatting, etc.).
- For each file, convert markdown to plain text then use `BeautifulSoup` to strip out HTML code, remove punctuation, convert everything to lowercase, and tokenize.
- Apply filters as lists to keep only the words that are not in the filter list (i.e. things like numbers and weasel words).
- Gather word frequencies and show the top results such as the 5 least common, 25 most common trigrams, 25 most common words, and 25 most common bigrams, along with their counts.

### Setup the environment

```python
pip install --upgrade pip
pip install pandas
pip install requests
pip install markdown
pip install textblob
pip install beautifulsoup4
pip install nltk
pip install gensim
pip install spacy
```

### Customizing as I go on each run

- Run the script and update filters by appending to ```weasel_words```
- Update the other filters to get rid of non-topical words like time references
- Alter the numerical values for returned results

```python
import glob
import markdown
import re
import nltk
from collections import Counter
from nltk.tokenize import word_tokenize
from nltk.corpus import stopwords
from nltk.util import ngrams
from bs4 import BeautifulSoup

# Download NLTK data if needed
nltk.download('punkt')  # For tokenization
nltk.download('stopwords')  # For stop word removal
nltk.download('averaged_perceptron_tagger')

# 1. Define Folder Path and Load Markdown Files
folder_path = '/path/to/my/blog/posts/*.md'  # Your folder path
markdown_files = glob.glob(folder_path)
all_text = ""

for file_path in markdown_files:
    with open(file_path, 'r') as file:
        md_text = file.read()
        plain_text = markdown.markdown(md_text)

        # Remove HTML tags
        soup = BeautifulSoup(plain_text, 'html.parser')
        plain_text = soup.get_text()

        all_text += plain_text + " " 

# 2. Clean and Preprocess Text
all_text = re.sub(r'[^\w\s]', '', all_text).lower() 
words = word_tokenize(all_text)

# Extended list of words to filter out

weasel_words = {"subscribe", "linkedin", "people", "good", "email",
                "shot"} # Add your words

days_of_week = {"timeline", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"}
months = {"january", "february", "march", "april", "may", "june", "july", "august", "september",
          "october", "november", "december", "jan", "feb", "mar", "apr", "may", "jun", "jul",
          "aug", "sep", "oct", "nov", "dec"}  # Added abbreviations
week_variations = {"week", "weeks", "weekly"}

words_to_filter = set(stopwords.words('english'))
words_to_filter.update(weasel_words, days_of_week, months, week_variations) 

# Filter out words that are numbers
filtered_words = [word for word in words if not word in words_to_filter and not word.isdigit()]

# 3. Analyze for Most Common Words, Bigrams, and Trigrams
word_counts = Counter(filtered_words)
top_words = word_counts.most_common(25)

bigrams = ngrams(filtered_words, 2)
bigram_counts = Counter(bigrams)
top_bigrams = bigram_counts.most_common(25)

trigrams = ngrams(filtered_words, 3)
trigram_counts = Counter(trigrams)
top_trigrams = trigram_counts.most_common(25)

# Get the 5 least common trigrams
least_common_trigrams = trigram_counts.most_common()[-5:] 
# Note:  We reverse the order using `[-5:]` to get the least common ones.

print("\nTop 5 Least Common Three-Word Phrases:")
for trigram, count in least_common_trigrams:
    print(f"{trigram}: {count}")  

print("\nTop 25 Most Common Three-Word Phrases:")
for trigram, count in top_trigrams:
    print(f"{trigram}: {count}")

print("\nTop 25 Most Common Words:")
for word, count in top_words:
    print(f"{word}: {count}")

print("\nTop 25 Most Common Two-Word Phrases:")
for bigram, count in top_bigrams:
    print(f"{bigram}: {count}")

```

## And the results...

    Top 5 Least Common Three-Word Phrases:
    ('fighting', 'check', 'innovation'): 1
    ('check', 'innovation', 'customer'): 1
    ('innovation', 'customer', 'rfid'): 1
    ('customer', 'rfid', 'suppliers'): 1
    ('rfid', 'suppliers', 'sector'): 1
    
    Top 25 Most Common Three-Word Phrases:
    ('edge', 'core', 'cloud'): 26
    ('hyperscale', 'cloud', 'providers'): 25
    ('internal', 'developer', 'platform'): 22
    ('low', 'code', 'code'): 17
    ('cloud', 'data', 'services'): 15
    ('developer', 'platform', 'idp'): 12
    ('business', 'value', 'engineering'): 11
    ('gartner', 'hype', 'cycle'): 11
    ('developer', 'experience', 'devx'): 11
    ('software', 'supply', 'chain'): 11
    ('site', 'reliability', 'engineering'): 10
    ('cloud', 'status', 'dashboards'): 10
    ('status', 'dashboards', 'cloud'): 10
    ('oracle', 'cloud', 'infrastructure'): 10
    ('silo', 'spreadsheet', 'sprawl'): 10
    ('supply', 'chain', 'security'): 10
    ('aws', 'azure', 'gcp'): 9
    ('google', 'cloud', 'platform'): 9
    ('multicloud', 'data', 'services'): 9
    ('cloud', 'engineering', 'slo'): 8
    ('oran', 'vran', '5g'): 8
    ('cloud', 'impact', 'mapping'): 8
    ('cloud', 'mean', 'rca'): 8
    ('hyperscale', 'cloud', 'provider'): 8
    ('hype', 'cycle', 'emerging'): 8
    
    Top 25 Most Common Words:
    cloud: 562
    data: 502
    ai: 376
    platform: 231
    google: 229
    technology: 212
    engineering: 210
    software: 208
    services: 207
    experience: 166
    internet: 158
    developer: 150
    access: 148
    business: 139
    code: 138
    market: 135
    computing: 135
    company: 132
    network: 131
    security: 130
    product: 130
    tools: 123
    looking: 123
    tech: 123
    technologies: 122
    
    Top 25 Most Common Two-Word Phrases:
    ('platform', 'engineering'): 83
    ('quantum', 'computing'): 48
    ('cloud', 'providers'): 43
    ('machine', 'learning'): 41
    ('zero', 'trust'): 40
    ('low', 'code'): 37
    ('developer', 'experience'): 36
    ('data', 'centers'): 36
    ('hyperscale', 'cloud'): 34
    ('cloud', 'provider'): 31
    ('google', 'cloud'): 31
    ('internal', 'developer'): 30
    ('generative', 'ai'): 29
    ('data', 'services'): 28
    ('edge', 'core'): 28
    ('supply', 'chain'): 27
    ('core', 'cloud'): 26
    ('impact', 'mapping'): 26
    ('status', 'dashboards'): 25
    ('ai', 'ml'): 24
    ('mean', 'rca'): 24
    ('mergers', 'acquisitions'): 24
    ('artificial', 'intelligence'): 22
    ('oracle', 'cloud'): 22
    ('developer', 'platform'): 22

## Have I found my niche?

Based on these swirling telecom, cloud, and A.I. themes, I'm leaning towards a newsletter niche that provides a consistent format tracking where the edge and machine learning meet. More to come, but that's my thinking as of this edition.

Stay tuned...

# Disclosure

I am linking to my [disclosure](https://jaycuthrell.com/disclosure/).
