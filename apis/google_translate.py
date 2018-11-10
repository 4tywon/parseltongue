from translate import Translator
import nltk

translator = Translator(to_lang="fr")
translation = translator.translate("This is a pen.")

lines = 'lines is some string of words'
is_noun = lambda pos: pos[:2] == 'NN'
tokenized = nltk.word_tokenize(lines)
nouns = [word for (word, pos) in nltk.pos_tag(tokenized) if is_noun(pos)] 

def page_to_french(page_of_words):
    
    is_noun = lambda pos: pos[:2] == 'NN'
    tokenized = nltk.word_tokenize(page_of_words)
    nouns = [word for (word, pos) in nltk.pos_tag(tokenized) if is_noun(pos)] 
    
    for i in nouns: 
        translation = translator.translate(i)
        page_of_words = page_of_words.replace(i, translator.translate(i))
        
    return page_of_words

def to_french(french_words):
    
    split_words = french_words.split(",")
    
    is_noun = lambda pos: pos[:2] == 'NN'
    tokenized = nltk.word_tokenize(french_words)
    nouns = [word for (word, pos) in nltk.pos_tag(tokenized) if is_noun(pos)] 
    
    for i in nouns: 
        translation = translator.translate(i)
        french_words = french_words.replace(i, translator.translate(i))
        
    return french_words


# take list of words get nouns, translate by separating with commas, update information