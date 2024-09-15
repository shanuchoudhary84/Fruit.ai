from fastapi import FastAPI, HTTPException, Depends
from sqlalchemy.orm import Session
from fastapi.middleware.cors import CORSMiddleware
from . import models, schemas, crud
from .database import SessionLocal, engine

models.Base.metadata.create_all(bind=engine)

app = FastAPI(title="Fruit FAQ API")

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"],  
    allow_headers=["*"],
)

# Dependency to get DB session
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get("/faqs", response_model=list[schemas.FAQ])
def read_faqs(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    faqs = crud.get_faqs(db, skip=skip, limit=limit)
    return faqs

@app.get("/faqs/{faq_id}", response_model=schemas.FAQ)
def read_faq(faq_id: int, db: Session = Depends(get_db)):
    db_faq = crud.get_faq(db, faq_id=faq_id)
    if db_faq is None:
        raise HTTPException(status_code=404, detail="FAQ not found")
    return db_faq

@app.post("/faqs", response_model=schemas.FAQ, status_code=201)
def create_faq(faq: schemas.FAQCreate, db: Session = Depends(get_db)):
    return crud.create_faq(db=db, faq=faq)

@app.put("/faqs/{faq_id}", response_model=schemas.FAQ)
def update_faq(faq_id: int, faq: schemas.FAQCreate, db: Session = Depends(get_db)):
    db_faq = crud.update_faq(db=db, faq_id=faq_id, faq=faq)
    if db_faq is None:
        raise HTTPException(status_code=404, detail="FAQ not found")
    return db_faq

@app.delete("/faqs/{faq_id}")
def delete_faq(faq_id: int, db: Session = Depends(get_db)):
    success = crud.delete_faq(db=db, faq_id=faq_id)
    if not success:
        raise HTTPException(status_code=404, detail="FAQ not found")
    return {"detail": "FAQ deleted successfully"}
