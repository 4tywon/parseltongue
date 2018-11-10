from translate import Translator
import nltk

# Translates page of words as one big string into language of choice
# def translate_page(page_of_words, language):
    
#     translator = Translator(to_lang=language)
#     is_noun = lambda pos: pos[:2] == 'NN'
#     tokenized = nltk.word_tokenize(page_of_words)
#     nouns = [word for (word, pos) in nltk.pos_tag(tokenized) if is_noun(pos)] 
    
#     for i in nouns: 
#         translation = translator.translate(i)
#         page_of_words = page_of_words.replace(i, translator.translate(i))
        
#     return page_of_words

# # Translates array of words into language of choice
# def translate_array(list_english_words, language): 
    
#     translated_list = []
#     translator = Translator(to_lang=language)

#     for i in list_english_words:
#         translation = translator.translate(i)
#         translated_list.append(translation)

#     return translated_list

# # Translates a comma split string of words into language of choice
# def translate_comma_split_string(english_words, language):
    
#     split_words = english_words.split(",")
#     translated_words = english_words

#     translator = Translator(to_lang=language)

    
#     is_noun = lambda pos: pos[:2] == 'NN'
#     tokenized = nltk.word_tokenize(translated_words)
#     nouns = [word for (word, pos) in nltk.pos_tag(tokenized) if is_noun(pos)] 
    
#     for i in nouns: 
#         translation = translator.translate(i)
#         translated_words = translated_words.replace(i, translator.translate(i))
        
#     return translated_words
	# translation_dict = {}

 #    translator = Translator(to_lang=language)
    
 #    # is_noun = lambda pos: pos[:2] == 'NN'
 #    tokenized = nltk.word_tokenize(translated_words)
 #    nouns = [word for (word, pos) in nltk.pos_tag(tokenized) if is_noun(pos)] 
    
 #    for i in nouns: 
 #        translation = translator.translate(i)
 #        translated_words = translated_words.replace(i, translator.translate(i))
        
 #    return translated_words

 

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



