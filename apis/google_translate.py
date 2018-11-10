from translate import Translator
import nltk

def translate_page(page_of_words, language):
    
    translator = Translator(to_lang=language)
    is_noun = lambda pos: pos[:2] == 'NN'
    tokenized = nltk.word_tokenize(page_of_words)
    nouns = [word for (word, pos) in nltk.pos_tag(tokenized) if is_noun(pos)] 
    
    for i in nouns: 
        translation = translator.translate(i)
        page_of_words = page_of_words.replace(i, translator.translate(i))
        
    return page_of_words



def translate_array(list_english_words, language): 
    
    translated_list = []
    translator = Translator(to_lang=language)


    for i in list_english_words:
        translation = translator.translate(i)
        translated_list.append(translation)

    return translated_list


def translate_comma_split_string(english_words, language):
    
    split_words = english_words.split(",")
    translated_words = english_words

    translator = Translator(to_lang=language)

    
    is_noun = lambda pos: pos[:2] == 'NN'
    tokenized = nltk.word_tokenize(translated_words)
    nouns = [word for (word, pos) in nltk.pos_tag(tokenized) if is_noun(pos)] 
    
    for i in nouns: 
        translation = translator.translate(i)
        translated_words = translated_words.replace(i, translator.translate(i))
        
    return translated_words

