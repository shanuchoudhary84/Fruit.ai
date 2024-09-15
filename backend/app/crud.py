from sqlalchemy.orm import Session
from . import models, schemas


def get_faq(db: Session, faq_id: int):
    return db.query(models.FAQ).filter(models.FAQ.id == faq_id).first()


def get_faqs(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.FAQ).offset(skip).limit(limit).all()


def create_faq(db: Session, faq: schemas.FAQCreate):
    db_faq = models.FAQ(question=faq.question, answer=faq.answer)
    db.add(db_faq)
    db.commit()
    db.refresh(db_faq)
    return db_faq


def update_faq(db: Session, faq_id: int, faq: schemas.FAQCreate):
    db_faq = get_faq(db, faq_id=faq_id)
    if db_faq is None:
        return None
    db_faq.question = faq.question
    db_faq.answer = faq.answer
    db.commit()
    db.refresh(db_faq)
    return db_faq


def delete_faq(db: Session, faq_id: int):
    db_faq = get_faq(db, faq_id=faq_id)
    if db_faq is None:
        return False
    db.delete(db_faq)
    db.commit()
    return True
