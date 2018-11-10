from translate import Translator
import nltk

# Translates page of words as one big string into language of choice and returns a dictionary 
# with keys as english words and values as words in the language input
def get_translated_dictionary(english_page_of_words, language):

    translator = Translator(to_lang=language)
    translated_dict = {}

    is_noun = lambda pos: pos[:2] == 'NN'

    tokenized = nltk.word_tokenize(english_page_of_words)
    nouns = [word for (word, pos) in nltk.pos_tag(tokenized) if is_noun(pos)] 
    
    for i in nouns: 

        translation = translator.translate(i)
        translated_dict[i] = translation
        
    return translated_dict



