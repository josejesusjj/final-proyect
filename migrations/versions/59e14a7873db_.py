"""empty message

Revision ID: 59e14a7873db
Revises: e6f65407a770
Create Date: 2022-03-30 17:11:52.331892

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '59e14a7873db'
down_revision = 'e6f65407a770'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('travel', sa.Column('location', sa.String(), nullable=True))
    op.drop_column('travel', 'Location')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('travel', sa.Column('Location', sa.VARCHAR(), autoincrement=False, nullable=True))
    op.drop_column('travel', 'location')
    # ### end Alembic commands ###
